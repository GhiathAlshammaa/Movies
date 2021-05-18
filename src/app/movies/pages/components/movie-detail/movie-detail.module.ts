import { NgModule } from '@angular/core';
import { RightModule } from './right/right.module';
import { LeftModule } from './left/left.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [],
  imports: [SharedModule, RightModule, LeftModule],
  exports: [RightModule, LeftModule],
})
export class MovieDetailModule {}
