import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginGuard } from '@app/admin/guard';
import { PageNotFoundComponent } from '@app/pages';
import { SharedModule } from '@app/shared';
import { DashboardComponent, ListComponent } from '.';

const routes: Routes = [
  {
    path: 'dashboard',
    // component: DashboardComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'home',
        pathMatch: 'full',
        redirectTo: 'user-profile',
      },
      {
        path: 'user-profile',
        component: DashboardComponent,
        canActivate: [AuthLoginGuard],
      },
      {
        path: 'list',
        component: ListComponent,
        canActivate: [AuthLoginGuard],
      },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
