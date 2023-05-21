import { Component } from '@angular/core';
import { NavbarServiceService } from '../services/navbar-service.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  constructor(public navbarService: NavbarServiceService) {}
}
