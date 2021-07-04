import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from '@app/admin/guard';
import { SharedModule } from '@app/shared';
import { DashboardComponent, ListPageComponent, UserProfileComponent } from '.';
import { AdminComponentsModule } from '../components/admin-components.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthLoginGuard],

    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'home',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'list',
        component: ListPageComponent,
        canActivate: [AuthLoginGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent, UserProfileComponent, ListPageComponent],
  imports: [SharedModule, AdminComponentsModule, RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    AdminComponentsModule,
    DashboardComponent,
    UserProfileComponent,
    ListPageComponent,
  ],
})
export class DashboardRoutingModule {}
