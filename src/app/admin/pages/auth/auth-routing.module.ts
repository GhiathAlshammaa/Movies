import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard, AuthVerifiedGuard } from '../../guard';

import {
  SignInComponent,
  SignUpComponent,
  SignOutComponent,
  VerifyEmailComponent,
  ForgotPasswordComponent,
} from '.';
import { SharedModule } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: SignInComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: 'signOut',
        component: SignOutComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
