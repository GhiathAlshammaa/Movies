import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { AuthLoginGuard, AuthVerifiedGuard } from './guard';
import {
  SignInComponent,
  SignUpComponent,
  SignOutComponent,
  VerifyEmailComponent,
  ForgotPasswordComponent,
} from './pages/auth';

import { DashboardComponent } from './pages/dashboard';

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
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthVerifiedGuard, AuthLoginGuard],
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
export class AdminRoutingModule {}
