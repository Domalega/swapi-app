import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-planet',
  templateUrl: './cardPlanet.component.html',
})
export class CardPlanetComponent {
  @Input() planetData: any;

  constructor(private router: Router) {}

  isModalOpen: boolean = false;

  navigateToResidents(url: string) {
    localStorage.setItem('urlOfPlanet', url);
    this.router.navigateByUrl('/residents');
  }
}
