import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-resident',
  templateUrl: './navBarResidents.component.html',
})
export class NavbarResidentsComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    localStorage.removeItem('urlOfPlanet');
    this.router.navigateByUrl('/');
  }
}
