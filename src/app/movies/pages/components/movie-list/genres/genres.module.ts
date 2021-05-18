import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GenreMoviesListComponent,
  GenresHomeComponent,
  MovieGenresBarComponent,
} from '.';
import { SharedModule } from '@app/shared';


@NgModule({
  declarations: [
    MovieGenresBarComponent,
    GenreMoviesListComponent,
    GenresHomeComponent,
  ],
  imports: [SharedModule],
  exports: [
    MovieGenresBarComponent,
    GenreMoviesListComponent,
    GenresHomeComponent,
  ],
})
export class GenresModule {}
