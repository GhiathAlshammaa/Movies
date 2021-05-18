import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPagesModule } from './pages/movies-pages.module';

@NgModule({
  imports: [ MoviesRoutingModule],
  exports: [MoviesRoutingModule],
})
export class MoviesModule {}
