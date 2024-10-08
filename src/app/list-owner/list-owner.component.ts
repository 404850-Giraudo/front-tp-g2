import { Component, inject } from '@angular/core';
import { CardOwnerComponent } from '../card-owner/card-owner.component';
import { OwnerService } from '../services/owner.service';
import { Owner } from '../../models/owner-models';
import { response } from 'express';

@Component({
  selector: 'app-list-owner',
  standalone: true,
  imports: [ CardOwnerComponent ],
  templateUrl: './list-owner.component.html',
  styleUrl: './list-owner.component.css'
})
export class ListOwnerComponent {

  private ownerService = inject(OwnerService);

  owners : Owner[] = []

  ngOnInit(): void {
    this.ownerService.getOwners().subscribe(
      response => {
        console.log(response);
        this.owners = response;
      },
      error => {
        console.error("Error al obtener oensers: ", error);
      }
    )
  }

}
