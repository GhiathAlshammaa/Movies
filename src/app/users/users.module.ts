import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@app/shared';
import { SignInComponent } from './pages';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [SignInComponent, DashboardComponent],
  imports: [SharedModule, UsersRoutingModule],
  exports: [UsersRoutingModule, SignInComponent],
})
export class UsersModule {}
