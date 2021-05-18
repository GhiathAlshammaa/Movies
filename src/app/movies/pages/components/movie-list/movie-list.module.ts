import { NgModule } from '@angular/core';
import { GenresModule } from './genres/genres.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [],
  imports: [SharedModule, GenresModule],
  exports: [GenresModule],
})
export class MovieListModule {}
