import { NgModule } from '@angular/core';
import {
  MovieDetailComponent,
  MovieListComponent,
  ActorDetailComponent,
} from '.';
import { SharedModule } from '@app/shared';
import { MoviesComponentsModule } from './components/movies-components.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    ActorDetailComponent,
  ],
  imports: [SharedModule, MoviesComponentsModule],
  exports: [
    MovieListComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    MoviesComponentsModule,
  ],
})
export class MoviesPagesModule {}
