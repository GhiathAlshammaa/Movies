import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';

@NgModule({
  imports: [CommonModule, SeriesRoutingModule],
  exports: [SeriesRoutingModule],
})
export class SeriesModule {}
