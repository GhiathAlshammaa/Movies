import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  form = new FormGroup({
    passwordResetEmail: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  submitHandler(): void {
    if (this.form.valid) {
      const passwordResetEmail = this.form.get('passwordResetEmail').value;
      this.authService.ForgotPassword(passwordResetEmail);
    }
  }
}
