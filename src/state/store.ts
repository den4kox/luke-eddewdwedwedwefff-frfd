import { configure, makeObservable, computed } from "mobx";

import { Disposable, DisposeBag } from "./DisposableBag";

import { createPeopleStore, IPeopleStore } from "./people";
import { createFilterStore, IFilterStore } from "./filter";

import { IStore } from "./types";
import { handleFilterChange } from "./reactions/handleFilterChange";
configure({ enforceActions: "always" });

export class Store implements Disposable, IStore {
  public disposeBag: DisposeBag;
  public people: IPeopleStore;
  public filter: IFilterStore;

  public constructor() {
    console.log("STORE INIT");

    makeObservable(this, {
      total: computed
    });

    this.disposeBag = new DisposeBag();
    this.filter = createFilterStore(this);
    this.people = createPeopleStore(this);

    this.disposeBag.addDisposables([handleFilterChange(this)]);
  }

  public dispose(): void {
    this.disposeBag.dispose();
  }

  public get total(): number {
    return this.people.total;
  }
}
