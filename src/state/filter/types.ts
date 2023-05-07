import { StoreProps } from "../types";
import { EResources } from "types";

export interface IFilterStore {
  text: string;
  page: number;
  resource: EResources;
  setResource: (resource: EResources | null) => void;
  setText: (text: string | null) => void;
  setPage: (page: number | null) => void;
}

export type FilterStoreProps = StoreProps;
