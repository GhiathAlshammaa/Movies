import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '@app/shared';
import { AdminComponentsModule } from './components/admin-components.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [SharedModule, AuthModule, DashboardModule, AdminComponentsModule],
  exports: [AuthModule, DashboardModule, AdminComponentsModule],
})
export class AdminPagesModule {}
