import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { List } from '@app/core/models';
import { DashboardService } from '@app/core/services';
import { HandleError } from '@app/core/utils';
import { AddListDialogComponent } from '../add-list-dialog/add-list-dialog.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'add-list-button',
  templateUrl: 'add-list-button.component.html',
  styleUrls: ['add-list-button.component.scss'],
})
export class AddListButtonComponent implements OnInit {
  name: string;
  description: string;
  list: List;
  lists$;
  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService
  ) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      dialogTitle: 'Add a new List',
    };

    const dialogRef = this.dialog.open(AddListDialogComponent, {
      width: '400px',
      data: dialogConfig.data,
    });

    // dialogRef.afterClosed().subscribe((data) => (this.list = data));
    const uid = JSON.parse(localStorage.getItem('user')).uid;
    // console.log(`uid: ${uid}`);
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dashboardService?.SetListData(data as List, uid);
      }
    });
  }

  ngOnInit(): void {}

  addList() {}
}
