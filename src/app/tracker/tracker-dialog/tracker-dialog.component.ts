import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tracker-dialog',
  templateUrl: './tracker-dialog.component.html',
  styleUrls: ['./tracker-dialog.component.scss']
})
export class TrackerDialogComponent implements OnInit {

  value = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.setValue();
  }

  setValue() {
    if(this.data.status === "processing") {
      this.value = 20;
    } else if(this.data.status === "shipped") {
      this.value = 50;
    } else {
      this.value = 100;
    }
  }

  onSubmit() {
    
  }

}
