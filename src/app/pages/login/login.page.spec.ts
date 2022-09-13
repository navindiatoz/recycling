import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(),ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should create form on init', () => {
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to home page after login', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
  it('should go to register page after clicking register button', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
