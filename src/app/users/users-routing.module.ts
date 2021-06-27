import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import {
  DashboardComponent,
  ForgotPasswordComponent,
  SignInComponent,
  SignOutComponent,
  SignUpComponent,
  VerifyEmailComponent,
} from './pages';

const routes: Routes = [
  {
    path: '',
    // component: SignInComponent,
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
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
      {
        path: 'signOut',
        component: SignOutComponent,
      },
      {
        path: 'verify-email',
        component: VerifyEmailComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
  ],
})
export class UsersRoutingModule {}
