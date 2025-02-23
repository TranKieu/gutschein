import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Credentials } from '../../shared/interfaces/credentials';

@Component({
  selector: 'maicf-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styles: ``,
})
export class LoginFormComponent {
  login = output<Credentials>();

  private fb = inject(FormBuilder);

  formMaicafe = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.formMaicafe.valid) {
      this.login.emit(this.formMaicafe.getRawValue());
    }
  }
}
