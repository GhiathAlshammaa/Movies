import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-list-dialog',
  templateUrl: 'list-dialog.component.html',
  styleUrls: ['list-dialog.component.scss'],
})
export class ListDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  name: string;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data?.dialogTitle;
    this.name = data?.name ? data.name : null;
    this.description = data?.description ? data.description : null;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.name, [Validators.required, Validators.minLength(6)]],
      description: [this.description, []],
    });
  }

  submitHandler() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
