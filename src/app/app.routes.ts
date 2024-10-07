import { Routes } from '@angular/router';
import { FormOwnerComponent } from './form-owner/form-owner.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormAddressComponent } from './form-address/form-address.component';

export const routes: Routes = [
    {
    path: 'form', component : FormOwnerComponent
    },
    {
        path: 'contact', component : FormContactComponent
    },
    {
        path: 'address', component : FormAddressComponent
    }

];
