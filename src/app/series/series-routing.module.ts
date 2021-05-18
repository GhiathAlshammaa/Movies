import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent, SerieDetailComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: SerieListComponent,
    data: { pageTitle: 'Serie List' },
  },
  {
    path: ':id',
    component: SerieDetailComponent,
    data: { pageTitle: 'Serie' },
  },
];

@NgModule({
  declarations: [SerieListComponent, SerieDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SerieListComponent, SerieDetailComponent, RouterModule],
})
export class SeriesRoutingModule {}
