export interface Address {
    id: number;
    street_address: string;
    number: number;
    floor: number;
    apartment: string;
    city: string;
    province: string;
    country: string;
    postal_code: number;
}

export interface Contact {
    contact_type: number;
    contact_info: string;
}

export interface Owner {
    id: number;
    first_name: string;
    second_name: string;
    last_name: string;
    owner_type: string;
    document_number: string;
    document_type: string;
    cuit: string;
    bank_account: string;
    birth_date: string;
    addresses: Address[];
    contacts: Contact[];
  }
  