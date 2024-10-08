import { Component, inject } from '@angular/core';
import { FormAddressComponent } from '../form-address/form-address.component';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerService } from '../services/owner.service';

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
    is_validated: new FormControl(false)
  });

  // Method to handle form submission
  onSubmit() {
    console.log(this.ownerForm.value);
  }

}
