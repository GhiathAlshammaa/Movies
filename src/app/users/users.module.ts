import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [],
  imports: [SharedModule, UsersRoutingModule],
  exports: [UsersRoutingModule],
})
export class UsersModule {}
