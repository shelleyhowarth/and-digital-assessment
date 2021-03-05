import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReturnsService } from 'src/app/services/returns.service';

@Component({
  selector: 'app-returns-dialog',
  templateUrl: './returns-dialog.component.html',
  styleUrls: ['./returns-dialog.component.scss']
})
export class ReturnsDialogComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;

  returnReasons = [
    {
      label: "Incorrect size",
      value: "size"
    },
    {
      label: "Don't like colour",
      value: "colour"
    },
    {
      label: "Don't like style",
      value: "style"
    },
    {
      label: "Other",
      value: "other"
    }
  ]

  products = []


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private rs: ReturnsService) { }

  ngOnInit(): void {
    this.setUpForm();
    this.products = this.data.products;
  }

  setUpForm() {
    this.form = this.fb.group( {
      items: [null, [Validators.required]],
      reason: [null, [Validators.required,]],
    });
  }


  onSubmit() {
    let returnObj = {
      email: this.data.email,
      orderRef: this.data.orderRef,
      items: this.form.value.items,
      reason: this.form.value.reason
    }
    this.rs.addReturn(returnObj);
    this.submitted = true;
  }

}
