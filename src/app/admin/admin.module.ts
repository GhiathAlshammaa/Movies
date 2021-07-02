import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@app/shared';
import { ListComponent } from './pages/components/dashboard/list/list.component';
import { AdminPagesModule } from './pages/admin-pages.module';

@NgModule({
  imports: [SharedModule, AdminPagesModule, AdminRoutingModule],
  exports: [AdminPagesModule, AdminRoutingModule],
})
export class AdminModule {}
