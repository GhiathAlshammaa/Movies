import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  submitHandler() {
    if (this.form.valid) {
      const username = this.form.get('username').value;
      const email = this.form.get('email').value;
      const password = this.form.get('password').value;
      this.authService.SignUp(email, password, username);
    }
  }
}
