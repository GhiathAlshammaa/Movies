import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: 'add-list-dialog.component.html',
  styleUrls: ['add-list-dialog.component.scss'],
})
export class AddListDialogComponent implements OnInit {
  form: FormGroup;
  description: string;
  name: string;
  title: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.dialogTitle;
    this.description = '';
    this.name = '';
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
