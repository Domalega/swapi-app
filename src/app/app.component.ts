import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
