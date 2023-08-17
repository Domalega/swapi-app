import { Component, OnInit } from '@angular/core';
import { Iplanet } from 'src/module/iplanetes';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  planets: Array<Iplanet> | null = null;
  dataIsLoading: boolean = true;

  constructor(private planetService: DataService) {}

  async getData(): Promise<void> {
    try {
      this.planets = await this.planetService.getPlanets();
      this.dataIsLoading = false;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getData();
  }
}
