import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ReturnsService } from '../services/returns.service';
import { ReturnsDialogComponent } from './returns-dialog/returns-dialog.component';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  valid = false;
  orderRef = ''
  email = ''
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private fb: FormBuilder, private rs: ReturnsService, private dialog: MatDialog, private db: AngularFirestore, private sb: MatSnackBar) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.fb.group( {
      email: [null, [Validators.email, Validators.required]],
      orderRef: [null, [Validators.required, Validators.maxLength(15)]],
    })
  }

  openDialog() {
    this.db.collection('orders').doc(this.form.value.orderRef).valueChanges().subscribe( (obj: any) => {
      if(obj) {
        if(obj.email === this.form.value.email) {
          this.dialog.open(ReturnsDialogComponent, {
            data: obj
          });
        } else {
          this.sb.open("Incorrect email.", "Close", {
            duration: 2000,
            verticalPosition: this.verticalPosition
          })
          this.email = '';
        }
      } else {
        this.sb.open("Incorrect order reference.", "Close", {
          duration: 2000,
          verticalPosition: this.verticalPosition
        })
        this.orderRef = '';
      }
    });
  }
}
