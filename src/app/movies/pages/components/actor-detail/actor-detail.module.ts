import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorMoviesComponent, PersonalInfoComponent } from '.';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [PersonalInfoComponent, ActorMoviesComponent],
  imports: [SharedModule, CommonModule],
  exports: [PersonalInfoComponent, ActorMoviesComponent],
})
export class ActorDetailModule {}
