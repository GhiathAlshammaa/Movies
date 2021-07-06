import { Component, OnInit } from '@angular/core';
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
  name: string;
  description: string;
  list: List;

  constructor(
    public dialog: MatDialog,
    private dashboardService: DashboardService
  ) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      dialogTitle: `Edit the List ${null}`,
    };

    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '400px',
      data: dialogConfig.data,
    });

    const uid = JSON.parse(localStorage.getItem('user')).uid;
    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.dashboardService?.SetListData(data as List, uid);
      }
    });
  }

  ngOnInit(): void {}
}
