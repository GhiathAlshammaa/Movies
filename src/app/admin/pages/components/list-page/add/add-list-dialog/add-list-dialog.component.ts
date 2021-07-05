import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: 'add-list-dialog.component.html',
  styleUrls: ['add-list-dialog.component.scss'],
})
export class AddListDialogComponent implements OnInit {
  form: FormGroup;
  listDes: string;
  listTitle: string;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.dialogTitle;
    this.listDes = '';
    this.listTitle = '';
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      listTitle: [this.listTitle, []],
      listDes: [this.listDes, []],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
