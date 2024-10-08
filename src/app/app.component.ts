import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormOwnerComponent } from './form-owner/form-owner.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormOwnerComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-tp-g2';
}
