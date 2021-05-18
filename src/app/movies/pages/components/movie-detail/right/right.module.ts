import { NgModule } from '@angular/core';
import {
  MovieInternalInfoComponent,
  MovieSimilarGridComponent,
  MovieStaffComponent,
} from '.';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
  ],
  imports: [SharedModule],
  exports: [
    MovieInternalInfoComponent,
    MovieStaffComponent,
    MovieSimilarGridComponent,
  ],
})
export class RightModule {}
