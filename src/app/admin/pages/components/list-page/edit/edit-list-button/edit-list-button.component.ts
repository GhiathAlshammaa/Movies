import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { List } from '@app/core/models';
import { DashboardService } from '@app/core/services';
import { ListDialogComponent } from '../../shared/list-dialog/list-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'edit-list-button',
  templateUrl: 'edit-list-button.component.html',
  styleUrls: ['edit-list-button.component.scss'],
})
export class EditListButtonComponent implements OnInit {
  @Input() listId;
  name: string;
  description: string;
  listData: any;

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService
  ) {}

  async openDialog() {
    this.listData = this.dashboardService.getListById(this.listId);
    let listDataValues;

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogRef;
    this.listData
      ?.toPromise()
      .then((snapshot) => {
        listDataValues = snapshot.data() as List;

        dialogConfig.data = {
          dialogTitle: `Edit the List ${listDataValues.name}`,
          name: listDataValues ? listDataValues.name : null,
          description: listDataValues ? listDataValues.description : null,
        };

        dialogRef = this.dialog.open(ListDialogComponent, {
          width: '400px',
          data: dialogConfig.data,
        });

        dialogRef?.afterClosed().subscribe((data) => {
          if (data) {
            this.dashboardService?.updateListData(data as List, this.listId);
          }
        });
      })
      .catch((err) => alert(err));
  }

  ngOnInit(): void {}
}
