export interface Iplanet {
  climate: string;
  created: string;
  diameter: number;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: number;
  population: number;
  residents: Array<string>;
  rotation_period: number;
  surface_water: number;
  terrain: string;
  url: string;
}

export interface IplanetPage {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Iplanet>;
}
