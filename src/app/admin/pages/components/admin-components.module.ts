import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list-page/list/list.component';
import { MaterialModule } from '@app/material/material.module';
import { AddListButtonComponent } from './list-page/add/add-list-button/add-list-button.component';
import { SharedModule } from '@app/shared';
import { AddListDialogComponent } from './list-page/add/add-list-dialog/add-list-dialog.component';

@NgModule({
  declarations: [ListComponent, AddListButtonComponent, AddListDialogComponent],
  imports: [SharedModule, MaterialModule],
  exports: [ListComponent, AddListButtonComponent, AddListDialogComponent],
})
export class AdminComponentsModule {}
