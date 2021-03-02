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
      label: 'Products',
      icon: 'shopping_basket',
      path: '/products'
    },
    {
      label: 'My Account',
      icon: 'account_circle',
      path: '/account'
    },
    {
      label: 'Contact',
      icon: 'contact_support',
      path: '/contact'
    }
  ]
}
