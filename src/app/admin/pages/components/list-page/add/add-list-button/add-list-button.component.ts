import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  id: string;
  name: string;
  description: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      dialogTitle: 'Add a new List',
    };

    const dialogRef = this.dialog.open(AddListDialogComponent, {
      width: '400px',
      data: dialogConfig.data,
    });

    dialogRef
      .afterClosed()
      .subscribe((data) => console.log('Dialog output:', data));
  }

  ngOnInit(): void {}

  addList() {}
}
