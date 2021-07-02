import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [ListComponent],
  imports: [SharedModule],
  exports: [ListComponent],
})
export class DashboardModule {}
