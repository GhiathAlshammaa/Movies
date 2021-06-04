import { NgModule } from '@angular/core';
import { GenresModule } from './genres/genres.module';
import { SharedModule } from '@app/shared';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, GenresModule],
  exports: [GenresModule],
})
export class MovieListModule {}
