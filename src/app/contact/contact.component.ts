import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ContactForm } from '../models/ContactForm.model';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  reasonChoice = null;
  submitted = false;
  valid = false;

  constructor(private fb: FormBuilder, private cs: ContactService) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.fb.group( {
      email: [null, [Validators.email, Validators.required]],
      firstName: [null,[Validators.required, this.noWhitespaceValidator, Validators.maxLength(15)]],
      lastName: ['',[Validators.required, this.noWhitespaceValidator,Validators.maxLength(15)]],
      reason: ['', Validators.required],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(250), this.noWhitespaceValidator])],
      orderRef: [null, Validators.maxLength(15)],
    })
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit() {
      let contactObj: ContactForm = {
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        reason: this.form.value.reason,
        description: this.form.value.description,
        orderRef: ''
      }

      if(this.reasonChoice === 'return') {
        contactObj.orderRef = this.form.value.orderRef
      }

    this.cs.addContactForm(contactObj);
    this.submitted = true;
    this.form.reset();
  }

}
