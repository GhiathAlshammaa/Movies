import { NgModule } from '@angular/core';
import {
  ForgotPasswordComponent,
  SignInComponent,
  SignOutComponent,
  SignUpComponent,
  VerifyEmailComponent,
} from '.';
import { SharedModule } from '@app/shared';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
  imports: [SharedModule, AuthRoutingModule],
  exports: [
    ForgotPasswordComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    VerifyEmailComponent,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
