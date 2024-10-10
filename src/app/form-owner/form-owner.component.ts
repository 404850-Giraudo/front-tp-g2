import { Component, inject } from '@angular/core';
import { FormAddressComponent } from '../form-address/form-address.component';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { OwnerService } from '../services/owner.service';
import { Contact } from '../../models/owner-models';

@Component({
  selector: 'app-form-owner',
  standalone: true,
  imports: [FormAddressComponent, FormContactComponent, ReactiveFormsModule],
  templateUrl: './form-owner.component.html',
  styleUrl: './form-owner.component.css'
})
export class FormOwnerComponent {

  private ownerService = inject(OwnerService);

  ownerTypes : string[] = ['Person', 'Company', 'Other']
  contact: Contact = {
    contact_type: 0,
    contact_value: ''
  }
  contacts: any[] = [];

  ownerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    second_name: new FormControl(''),
    last_name: new FormControl('', [Validators.required]),
    owner_type: new FormControl(''),
    document_number: new FormControl('', [Validators.required]),
    document_type: new FormControl(''),
    cuit: new FormControl(''),
    bank_account: new FormControl(''),
    birth_date: new FormControl('', [Validators.required]),
    is_validated: new FormControl(false),
    contactsForm: new FormGroup({
      contact_type: new FormControl('', [Validators.required]),
      contact_value: new FormControl('', [Validators.required])
    }),
  });

  // Método para obtener los valores del FormGroup interno
  getContactValues() {
    const contactValues = this.ownerForm.get('contactsForm')?.value;
    console.log(contactValues);
    return contactValues;
  }

  // Añadir un contacto a la lista
  addContact(): void {
    if(this.ownerForm.get('contactsForm')?.valid) {
      const contactValues = this.ownerForm.get('contactsForm')?.value;
      console.log(contactValues);
      this.contacts.push(contactValues);
      this.ownerForm.get('contactForm')?.reset();
    } else {
      console.log("form contacto no valido");
      
    }
  }
  removeContact(index: number): void {
    this.contacts.splice(index, 1);
  }
 

  onSubmit(): void {
    console.log(this.ownerForm.value);
    // Aquí puedes procesar el formulario o enviarlo a tu backend
  }

}
