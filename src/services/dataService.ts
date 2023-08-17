import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iplanet, IplanetPage } from 'src/module/iplanetes';
import { Iperson } from 'src/module/iperson';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly URL: string = 'https://swapi.dev/api/planets';
  dataExist: boolean = true;

  constructor(private http: HttpClient) {}

  async getPlanets(): Promise<Array<Iplanet>> {
    try {
      let allResults: Array<Iplanet> = [];
      let currentURL: string = this.URL;

      while (currentURL) {
        let data: IplanetPage = (await this.http
          .get<IplanetPage>(currentURL)
          .toPromise()) as IplanetPage;

        if (data) {
          allResults = allResults.concat(data.results);
          currentURL = data.next ?? '';
        } else break;
      }

      return allResults;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPeople(url: any): Promise<Array<Iperson>> {
    try {
      const gender = localStorage.getItem('gender');
      const data: Iplanet = (await this.http
        .get<Iplanet>(url)
        .toPromise()) as Iplanet;

      const residentsUrl: string[] = data.residents;
      let allResidents: Array<Iperson> = [];

      for (const url of residentsUrl) {
        const response: Iperson = (await this.http
          .get<Iperson>(url)
          .toPromise()) as Iperson;

        if (gender == 'all') allResidents.push(response);
        else if (response.gender == 'male' && gender == 'male')
          allResidents.push(response);
        else if (response.gender == 'female' && gender == 'female')
          allResidents.push(response);
      }

      return allResidents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
