import { RootStore } from "../types";

export interface IFilterStore {
  text: string;
  page: number;
  setText: (text: string) => void;
  setPage: (page: number) => void;
}

export type FilterStoreProps = RootStore;
