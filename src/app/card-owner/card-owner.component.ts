import { Component, Input } from '@angular/core';
import { Owner } from '../../models/owner-models';

@Component({
  selector: 'app-card-owner',
  standalone: true,
  imports: [],
  templateUrl: './card-owner.component.html',
  styleUrl: './card-owner.component.css'
})
export class CardOwnerComponent {

  @Input() owner!: Owner; // el operador ! indica que será inicializado

}
