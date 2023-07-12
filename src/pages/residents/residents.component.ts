import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
})
export class ResidentsComponent {
  data: string | null;
  person: any;

  constructor(private router: Router, private personServices: DataService) {
    this.data = localStorage.getItem('urlOfPlanet');
    if (this.data === null) this.router.navigateByUrl('/');
  }

  ngOnInit() {
    this.personServices.getPeople(this.data).then((data) => {
      this.person = data;
    });
  }
}
