import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { from, Subscription } from 'rxjs';
import { AppState } from '../../../store/AppState';
import { hide, show } from 'src/store/loading/Loading.actions';
import { LoginPageForm } from './login.page.forms';
import { login, loginfail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess }
from 'src/store/login/Login.actions';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/LoginState';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  form: FormGroup;
  userName: string;
  loginStateSubsciption: Subscription;
  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formbuilder).createForm();
    this.loginStateSubsciption = this.store.select('login').subscribe(loginState => {
      this.onIsRecoveringPassword(loginState);
      this.onIsRecoverPasswordFail(loginState);
      this.toggleLoading(loginState);
      this.onIsLoggingIn(loginState);
      this.onError(loginState);
      this.onLoggedIn(loginState);
    });
  }
  toggleLoading(loginState: LoginState) {
    if (loginState.isLoggingIn || loginState.isRecoveringPassword) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }
  onIsLoggingIn(loginState: LoginState) {
    if (loginState.isLoggingIn) {
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      this.authService.login(email, password).subscribe(user => {
        this.store.dispatch(loginSuccess({ user }));
      },error=>this.store.dispatch(loginfail({error})));
    }
  }
  onLoggedIn(loginState: LoginState) {
    if (loginState.isLaggedIn) {
      this.router.navigate(['home']);
    }
  }

  onIsRecoveringPassword(loginState: LoginState) {
    if (loginState.isRecoveringPassword) {
      this.authService.recoverEmailPassword(this.form.get('email').value).subscribe(() => {
        this.store.dispatch(recoverPasswordSuccess());
      }, error => this.store.dispatch(recoverPasswordFail({ error })));
    }
  }
  async onError(loginState: LoginState) {
    if (loginState.isRecoveredPassword) {
      const toaster = await this.toastController.create({
        position: 'bottom',
        message: 'Recovery Mail Sent',
        color: 'primary'
      });
      toaster.present();
      setTimeout(() => {
        toaster.remove();
      }, 2000);
    }
  }
  async onIsRecoverPasswordFail(loginState: LoginState) {
    if (loginState.error) {
      const toaster = await this.toastController.create({
        position: 'bottom',
        message: loginState.error.message,
        color: 'danger'
      });
      toaster.present();
      setTimeout(() => {
        toaster.remove();
      }, 2000);
    }
  }

  register() {
    this.router.navigate(['register']);
  }
  login(val) {
    this.store.dispatch(login());
    const name = val.email.split('@');
    this.userName = name[0][0].toUpperCase();
    localStorage.setItem('name', name[0]);
    localStorage.setItem('logo', this.userName);
  }
  forgotPassword() {
    this.store.dispatch(recoverPassword());
  }
  ngOnDestroy(): void {
    if (this.loginStateSubsciption) {
      this.loginStateSubsciption.unsubscribe();
    }
  }
}
