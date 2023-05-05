import { IFilterStore, FilterStoreProps } from "./types";
import { makeObservable, observable, action } from "mobx";

class FilterStore implements IFilterStore {
  public text = "";
  public page = 1;
  public constructor(private root: FilterStoreProps) {
    makeObservable(this, {
      text: observable,
      page: observable,
      setText: action.bound,
      setPage: action.bound
    });
  }

  public setPage(page = 1) {
    this.page = page;
  }

  public setText(text = "") {
    this.text = text;
  }
}

export function createFilterStore(root: FilterStoreProps): IFilterStore {
  return new FilterStore(root);
}
