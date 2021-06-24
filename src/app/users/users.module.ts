import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@app/shared';
import {
  SignInComponent,
  SignUpComponent,
  VerifyEmailComponent,
} from './pages';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
  imports: [SharedModule, UsersRoutingModule],
  exports: [
    UsersRoutingModule,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
  ],
})
export class UsersModule {}
