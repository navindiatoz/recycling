import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.forms';

let loginPageForm: LoginPageForm;
let form: FormGroup;

beforeEach(() => {
  loginPageForm = new LoginPageForm(new FormBuilder());
  form = loginPageForm.createForm();
});

describe('LoginPageForm', () => {
   it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('email').valid).toBeFalsy();
    expect(form.get('password')).not.toBeNull();
    expect(form.get('email').value).toEqual('');
    expect(form.get('password').valid).toBeFalsy();
  });
  it('should have email invalid on email not valid', () => {
    form.get('email').setValue('invalid email');
    expect(form.get('email').valid).toBeFalsy();
  });
  it('should have email valid on email  valid', () => {
    form.get('email').setValue('valid@email.com');
    expect(form.get('email').valid).toBeTruthy();
  });
  it('should have valid form', () => {
    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('anything');
    expect(form.valid).toBeTruthy();
  });
});
