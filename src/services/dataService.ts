import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly URL: string = 'https://swapi.dev/api/planets';
  dataExist: boolean = true;

  constructor(private http: HttpClient) {}

  async getPlanets(): Promise<any> {
    try {
      let allResults: Array<Object> = [];
      let filter: string | null = localStorage.getItem('userChoice');
      let currentURL: string = this.URL;

      while (currentURL) {
        let data: any = await this.http.get(currentURL).toPromise();
        allResults = allResults.concat(data.results);
        currentURL = data.next;
      }
      return allResults;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getPeople(url: any): Promise<any> {
    try {
      console.log('SS');
      const gender = localStorage.getItem('gender');
      const data: any = await this.http.get(url).toPromise();
      const residentsUrl: string[] = data.residents;
      let allResidents: object[] = [];
      if (gender == 'all') {
        for (const url of residentsUrl) {
          const response: any = await this.http.get(url).toPromise();

          allResidents.push(response);
        }
      } else if (gender == 'male') {
        for (const url of residentsUrl) {
          const response: any = await this.http.get(url).toPromise();
          if (response.gender == 'male') allResidents.push(response);
        }
      }

      return allResidents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
