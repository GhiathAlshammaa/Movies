import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@app/shared';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [DashboardComponent, ListComponent],
  imports: [SharedModule, DashboardRoutingModule],
  exports: [DashboardComponent, ListComponent],
})
export class DashboardModule {}
