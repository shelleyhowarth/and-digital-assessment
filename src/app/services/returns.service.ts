import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReturnsService {


  constructor(private db: AngularFirestore) { }

  addReturn(returnObj: any) {
    this.db.collection('returns').doc().set(returnObj);
  }
}
