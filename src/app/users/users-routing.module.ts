import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { AuthGuard } from './guard/auth-login-and-verified.guard';
import { AuthLoginGuard } from './guard/auth-login.guard';
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
        canActivate: [AuthGuard],
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
        canActivate: [AuthGuard],
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
