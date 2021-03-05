import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageObject: Array<object> = [
    {
      thumbImage: '../../assets/01.jpg'
    },
    {
      thumbImage: '../../assets/02.jpg'
    },
    {
      thumbImage: '../../assets/03.jpg'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
