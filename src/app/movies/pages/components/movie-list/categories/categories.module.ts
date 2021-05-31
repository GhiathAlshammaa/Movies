import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { CategoryMoviesListComponent } from '.';

@NgModule({
  declarations: [CategoryMoviesListComponent],
  imports: [SharedModule],
  exports: [CategoryMoviesListComponent],
})
export class CategoriesModule {}
