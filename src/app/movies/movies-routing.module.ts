import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';

import {
  MovieListComponent,
  MovieDetailComponent,
  ActorDetailComponent,
} from './pages';
import {
  GenreMoviesListComponent,
  GenresHomeComponent,
} from './pages/components/';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    data: { pageTitle: 'Movie List' },
    children: [
      {
        path: '',
        redirectTo: 'genres',
        pathMatch: 'full',
      },
      {
        path: 'genres',
        component: GenresHomeComponent,
      },
      {
        path: 'genres/:id/:name',
        component: GenreMoviesListComponent,
      },
      {
        path: 'genres/category/:name',
        component: GenreMoviesListComponent,
      },
    ],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
  {
    path: ':id/:backTitle',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
  {
    path: 'actor/:id/:movieTitle',
    component: ActorDetailComponent,
    data: { pageTitle: 'Actor' },
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
