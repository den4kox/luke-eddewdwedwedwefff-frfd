import { Disposable, DisposeBag } from "./DisposableBag";
import { IFilterStore } from "./filter";
import { EResources } from "../types";

export interface IUnit {
  created: string;
  edited: string;
  url: string;
}

export interface ICharacter extends IUnit {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: [];
  starships: string[];
}

export interface IPlanets extends IUnit {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
}

export interface IFilms extends IUnit {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
}

export interface ISpecies extends IUnit {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
}

export interface IVehicles extends IUnit {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
}

export interface IStarships extends IUnit {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
}

export type ResourceData =
  | ICharacter
  | IFilms
  | IPlanets
  | IStarships
  | IVehicles
  | ISpecies;
export type ResourcesData = Array<ResourceData>;

export interface ResponseListBase {
  count: number;
  results: ResourcesData;
}

export interface IStore extends Disposable {
  readonly disposeBag: DisposeBag;
  readonly filter: IFilterStore;
  load: () => void;
  total: number;
  data: ResourcesData;
  isLoading: boolean;
}

export interface StoreProps {
  resource: EResources | null;
  text: string | null;
  page: number | null;
}

export type RootStore = IStore;
