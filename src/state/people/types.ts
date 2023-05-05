import { RootStore } from "../types";

export interface ICharacter {
  name: string;
}

export interface IPeopleStore {
  readonly characters: ICharacter[];
  total: number;
  loadCharacters: () => void;
}

export type PeopleStoreProps = RootStore;
