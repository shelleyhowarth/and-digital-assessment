import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.setUpForm();
    this.products = this.data.products;
    console.log(this.products);
  }

  setUpForm() {
    this.form = this.fb.group( {
      items: [null, [Validators.required]],
      reason: [null, [Validators.required,]],
    });
  }


  onSubmit() {
    this.submitted = true;
  }

}
