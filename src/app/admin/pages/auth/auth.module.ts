import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ForgotPasswordComponent,
  SignInComponent,
  SignOutComponent,
  SignUpComponent,
  VerifyEmailComponent,
} from '.';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
  imports: [SharedModule],
  exports: [
    ForgotPasswordComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
})
export class AuthModule {}
