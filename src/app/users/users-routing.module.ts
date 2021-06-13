import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { DashboardComponent, SignInComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    // component: SignInComponent,
    children: [
      {
        path: '',
        redirectTo: 'signIn',
        pathMatch: 'full',
      },
      {
        path: 'signIn',
        component: SignInComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      // {
      //   path: 'signUp',
      //   component: SignUpComponent,
      // },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
