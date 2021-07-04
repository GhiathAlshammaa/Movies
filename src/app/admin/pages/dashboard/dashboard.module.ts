import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared';
import { AdminComponentsModule } from '../components/admin-components.module';

@NgModule({
  imports: [DashboardRoutingModule],
  exports: [DashboardRoutingModule],
})
export class DashboardModule {}
