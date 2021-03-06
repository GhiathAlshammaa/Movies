import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent, FooterComponent } from './layout';
import { RouterModule } from '@angular/router';
import { SafePipe } from '@app/core/utils/safe.pipe';
import { MovieComponent, MoviesSliderComponent } from './components';
import { NgImageSliderModule } from 'ng-image-slider';
import { ReplaceUnderscorePipe } from '@app/core/utils/replace-underscore.pipe';
import { BackButtonDirective } from './directive';
import { MaterialModule } from '@app/material/material.module';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MoviesSliderComponent,
    SafePipe,
    ReplaceUnderscorePipe,
    BackButtonDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgImageSliderModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    SafePipe,
    ReplaceUnderscorePipe,
    MovieComponent,
    MoviesSliderComponent,
    RouterModule,
    BackButtonDirective,
  ],
})
export class SharedModule {}
