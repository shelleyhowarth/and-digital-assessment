import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactForm } from '../models/ContactForm.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private db: AngularFirestore) { }

  addContactForm(contactObj: ContactForm) {
    this.db.collection('contactForms').doc().set(contactObj);
  }

}
