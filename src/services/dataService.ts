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

  async getPeople(url: string): Promise<any> {
    try {
      const data: any = await this.http.get(url).toPromise();
      const residentsUrl: string[] = data.residents;
      let allResidents: object[] = [];

      for (const url of residentsUrl) {
        const response: any = await this.http.get(url).toPromise();
        allResidents.push(response);
      }
      console.log(allResidents);
      return allResidents;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
