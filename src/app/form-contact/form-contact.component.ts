import { Component } from '@angular/core';
import { Contact } from '../../models/owner-models';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {

  contacts: Contact[] = [];

  contactForm = new FormGroup({
    contact_type: new FormGroup('', [Validators.required]),
    contact_value: new FormGroup('', [Validators.required])
  });

  addContact() {
    console.log(this.contactForm.value);
  }

}
