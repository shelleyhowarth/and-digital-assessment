import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'and-digital';

  test() {
    console.log("Clicked");
  }

  menuItems = [
    {
      label: 'Home',
      icon: 'home',
      path: 'home'
    },
    {
      label: 'Track an order',
      icon: 'redeem',
      path: '/tracker'
    },
    {
      label: 'Return an item',
      icon: 'undo',
      path: '/returns'
    },
    {
      label: 'Help',
      icon: 'contact_support',
      path: '/contact'
    }
  ]
}
