import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { LoginPageForm } from './login.page.forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(private router: Router, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formbuilder).createForm();
  }
  login() {
    this.router.navigate(['home']);
  }
  register() {
    this.router.navigate(['register']);
  }
  login1(val) {
    console.log(val);
  }

}
