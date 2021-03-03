import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnsService {


  constructor(private db: AngularFirestore) { }

  getOrderItems(orderRef: string) {
    this.db.collection('orders').doc('test').valueChanges().subscribe(data => {
      return data;
    });
  }
}
