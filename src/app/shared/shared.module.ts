import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent } from './layout';
import { RouterModule } from '@angular/router';
import { SafePipe } from '@app/core/utils/safe.pipe';
import { MovieComponent, MoviesSliderComponent } from './components';
import { NgImageSliderModule } from 'ng-image-slider';
import { ReplaceUnderscorePipe } from '@app/core/utils/replace-underscore.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MoviesSliderComponent,
    SafePipe,
    ReplaceUnderscorePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgImageSliderModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    ReplaceUnderscorePipe,
    MovieComponent,
    MoviesSliderComponent,
    RouterModule,
  ],
})
export class SharedModule {}
