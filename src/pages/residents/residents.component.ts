import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
})
export class ResidentsComponent implements OnInit {
  dataOfPlanet: string | null | undefined = null;
  dataOfPerson: any;
  dataIsLoading: boolean = true;

  constructor(private router: Router, private personServices: DataService) {}

  async getData(): Promise<void> {
    try {
      this.dataOfPlanet = localStorage.getItem('urlOfPlanet');
      if (this.dataOfPlanet === null || this.dataOfPlanet === undefined)
        this.router.navigateByUrl('/');

      this.dataOfPerson = await this.personServices.getPeople(
        this.dataOfPlanet
      );
      this.dataIsLoading = false;
    } catch (error) {
      console.log(error);
      this.router.navigateByUrl('/error');
    }
  }

  ngOnInit(): void {
    this.getData();
  }
}
