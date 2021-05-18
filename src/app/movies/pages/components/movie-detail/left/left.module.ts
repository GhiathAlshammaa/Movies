import { NgModule } from '@angular/core';
import {
  MovieExternalInfoComponent,
  TrailerModalComponent,
} from '@app/movies/pages';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [MovieExternalInfoComponent, TrailerModalComponent],
  imports: [SharedModule],
  exports: [MovieExternalInfoComponent, TrailerModalComponent],
})
export class LeftModule {}
