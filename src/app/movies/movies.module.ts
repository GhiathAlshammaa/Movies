import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@src/environments/environment';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPagesModule } from './pages/movies-pages.module';
import { movieReducer } from './state/movie.reducer';

@NgModule({
  imports: [
    MoviesPagesModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', movieReducer),
  ],
  exports: [MoviesRoutingModule, MoviesPagesModule],
})
export class MoviesModule {}
