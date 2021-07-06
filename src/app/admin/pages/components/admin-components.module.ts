import { NgModule } from '@angular/core';
import { ListComponent } from './list-page/list/list.component';
import { MaterialModule } from '@app/material/material.module';
import { AddListButtonComponent } from './list-page/add/add-list-button/add-list-button.component';
import { SharedModule } from '@app/shared';
import { ListDialogComponent } from './list-page/shared/list-dialog/list-dialog.component';
import { EditListButtonComponent } from './list-page/edit/edit-list-button/edit-list-button.component';

@NgModule({
  declarations: [
    ListComponent,
    ListDialogComponent,
    AddListButtonComponent,
    EditListButtonComponent,
  ],
  imports: [SharedModule, MaterialModule],
  exports: [
    ListComponent,
    ListDialogComponent,
    AddListButtonComponent,
    EditListButtonComponent,
  ],
})
export class AdminComponentsModule {}
