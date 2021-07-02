import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { DashboardModule } from '.';

@NgModule({
  declarations: [],
  imports: [SharedModule, DashboardModule],
  exports: [DashboardModule],
})
export class AdminComponentsModule {}
