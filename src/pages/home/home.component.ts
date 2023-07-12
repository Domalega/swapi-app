import { Component } from '@angular/core';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'StarWars';
  planets: any;

  constructor(private planetService: DataService) {}

  ngOnInit() {
    this.planetService
      .getPlanets()
      .then((data) => {
        this.planets = data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  }
}
