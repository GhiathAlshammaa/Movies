import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MovieExternalInfoComponent, TrailerModalComponent } from '.';
import { ActorDetailModule } from './actor-detail/actor-detail.module';
import { MovieListModule } from './movie-list/movie-list.module';
import { MovieDetailModule } from './movie-detail/movie-detail.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ActorDetailModule,
    MovieListModule,
    MovieDetailModule,
  ],
  exports: [
    MovieExternalInfoComponent,
    TrailerModalComponent,
    ActorDetailModule,
    MovieListModule,
    MovieDetailModule,
  ],
})
export class MoviesComponentsModule {}
