import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-home',
  templateUrl: './navBarHome.component.html',
})
export class NavbarHomeComponent {
  constructor(private router: Router) {
    localStorage.setItem('gender', 'all');
  }

  onOptionSelected(event: any): void {
    const selectedGender = event.target.value;
    localStorage.setItem('gender', selectedGender);
  }

  navigateToHome(): void {
    localStorage.removeItem('urlOfPlanet');
    this.router.navigateByUrl('/');
  }
}
