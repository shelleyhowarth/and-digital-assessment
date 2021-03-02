import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setUpForm();
  }

  setUpForm() {
    this.form = this.fb.group( {
      email:[null, [Validators.email, Validators.required]],
      firstName: [null,[Validators.required, this.noWhitespaceValidator, Validators.maxLength(15)]],
      lastName: ['',[Validators.required, this.noWhitespaceValidator,Validators.maxLength(15)]],
      reason: ['', Validators.required],
      description: ['', Validators.compose([Validators.required, Validators.maxLength(250), this.noWhitespaceValidator])],
      orderNum: [null,[Validators.required, this.noWhitespaceValidator, Validators.maxLength(15)]],
    })
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }


}
