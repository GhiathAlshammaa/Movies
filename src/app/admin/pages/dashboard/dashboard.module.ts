import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [DashboardRoutingModule],
  exports: [DashboardRoutingModule],
})
export class DashboardModule {}
