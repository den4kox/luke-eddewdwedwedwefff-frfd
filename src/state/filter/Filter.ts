import { IFilterStore, FilterStoreProps } from "./types";
import { makeObservable, observable, action } from "mobx";
import { EResources } from "types";

class FilterStore implements IFilterStore {
  public text = "";
  public page = 1;
  public resource: EResources = EResources.People;

  public constructor(initial: FilterStoreProps) {
    makeObservable(this, {
      text: observable,
      page: observable,
      resource: observable,
      setText: action.bound,
      setResource: action.bound,
      setPage: action.bound,
    });

    this.text = initial.text ?? "";
    this.page = initial.page ?? 1;
    this.resource = initial.resource ?? EResources.People;
  }

  public setResource(resource: EResources | null) {
    this.resource = resource ?? EResources.People;
  }

  public setPage(page: number | null) {
    this.page = page ?? 1;
  }

  public setText(text: string | null) {
    this.text = text ?? "";
  }
}

export function createFilterStore(initial: FilterStoreProps): IFilterStore {
  return new FilterStore(initial);
}
