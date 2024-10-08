import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../../models/owner-models';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = 'https://my-json-server.typicode.com/113207-BURASCHI-MATEO/cadastre/owners';

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }
}
