import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { MoviesRoutingModule } from './movies-routing.module';
import { movieReducer } from './state/movie.reducer';

@NgModule({
  imports: [MoviesRoutingModule, StoreModule.forFeature('movies', movieReducer)],
  exports: [MoviesRoutingModule],
})
export class MoviesModule {}
