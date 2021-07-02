import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, PageNotFoundComponent } from './pages';
import { SelectiveStrategy } from './selective-strategy.service';
import { SharedModule } from './shared';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'auth',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () => import('@app/admin').then((m) => m.AdminModule),
  },
  {
    path: 'movies',
    data: { preload: false }, // change to true, when user use this route
    loadChildren: () => import('@app/movies').then((m) => m.MoviesModule),
  },
  {
    path: 'series',
    data: { preload: false },
    loadChildren: () => import('@app/series').then((m) => m.SeriesModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: SelectiveStrategy,
    }),
  ],
  exports: [RouterModule, HomeComponent, PageNotFoundComponent],
})
export class AppRoutingModule {}
