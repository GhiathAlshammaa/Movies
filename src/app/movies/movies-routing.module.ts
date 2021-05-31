import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared';
import { MoviesPagesModule } from './pages/movies-pages.module';

import {
  MovieListComponent,
  MovieDetailComponent,
  ActorDetailComponent,
} from './pages';
import {
  GenreMoviesListComponent,
  GenresHomeComponent,
} from './pages/components/';
import { CategoryMoviesListComponent } from './pages/components/movie-list/categories';

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
        component: CategoryMoviesListComponent,
      },
    ],
  },
  {
    path: ':id',
    component: MovieDetailComponent,
    data: { pageTitle: 'Movie' },
  },
  {
    path: 'actor/:id',
    component: ActorDetailComponent,
    data: { pageTitle: 'Actor' },
  },
];

@NgModule({
  imports: [SharedModule, MoviesPagesModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
