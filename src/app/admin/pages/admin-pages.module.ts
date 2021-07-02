import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '@app/shared';
import { AdminComponentsModule } from './components/admin-components.module';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, AuthModule, AdminComponentsModule],
  exports: [AuthModule, DashboardComponent, AdminComponentsModule],
})
export class AdminPagesModule {}
