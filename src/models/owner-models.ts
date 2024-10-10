export interface Address {
    id?: number;
    street_address: string;
    number: number;
    floor: number;
    apartment: string;
    city: string;
    province: string;
    country: string;
    postal_code: number;
    active: boolean;
}

export interface Contact {
    id?: number;
    contact_type: number;
    contact_value: string;
}

export interface Files {
    
}

export enum StateKYC {
    INITIATED

}

export interface Owner {
    id?: number;
    first_name: string;
    second_name: string;
    last_name: string;
    owner_type: string;
    document_number: string;
    document_type: string;
    cuit: string;
    bank_account: string;
    birth_date: string;
    is_validated: StateKYC;
    is_active: boolean;
    addresses: Address[];
    contacts: Contact[];
    files: Files[];
    plot_id: number;
}
  