import { Disposable, DisposeBag } from "./DisposableBag";
import { IPeopleStore } from "./people";
import { IFilterStore } from "./filter";

export interface IStore extends Disposable {
  readonly disposeBag: DisposeBag;
  readonly people: IPeopleStore;
  readonly filter: IFilterStore;

  total: number;
  // readonly planets: IPlanetsStore;
  // readonly films: IFilmsStore;
  // readonly species: ISpeciesStore;
  // readonly vehicles: IVehiclesStore;
  // readonly starships: IStarshipsStore;
}

export type RootStore = IStore;

// {
//   "people": "https://swapi.dev/api/people/",
//   "planets": "https://swapi.dev/api/planets/",
//   "films": "https://swapi.dev/api/films/",
//   "species": "https://swapi.dev/api/species/",
//   "vehicles": "https://swapi.dev/api/vehicles/",
//   "starships": "https://swapi.dev/api/starships/"
// }
