import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginPageForm {

  constructor(private formBuilder: FormBuilder) { }
  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }
}
