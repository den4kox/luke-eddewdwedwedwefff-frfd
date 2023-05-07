import {
  configure,
  makeObservable,
  runInAction,
  action,
  observable,
} from "mobx";

import { Disposable, DisposeBag } from "./DisposableBag";

import { createFilterStore, IFilterStore } from "./filter";

import { IStore, ResourcesData, ResponseListBase, StoreProps } from "./types";
import { handleFilterChange } from "./reactions/handleFilterChange";
import { baseUrl } from "const/url";
import { cachedFetch } from "utils/fetch";

configure({ enforceActions: "always" });

export class Store implements Disposable, IStore {
  public disposeBag: DisposeBag;
  public filter: IFilterStore;
  public total = 0;
  public data: ResourcesData = [];
  public isLoading = false;

  public constructor(props: StoreProps) {
    makeObservable(this, {
      total: observable,
      data: observable,
      isLoading: observable,
      load: action,
    });

    this.disposeBag = new DisposeBag();
    this.filter = createFilterStore(props);

    this.disposeBag.addDisposables([handleFilterChange(this)]);
    this.load();
  }

  public dispose(): void {
    this.disposeBag.dispose();
  }

  public load() {
    const url = new URL(`${baseUrl}/${this.filter.resource}`);
    if (this.filter.text) {
      url.searchParams.append("search", this.filter.text);
    }

    url.searchParams.append("page", String(this.filter.page));
    this.isLoading = true;
    cachedFetch<ResponseListBase>(url.toString()).then((data) => {
      if (data.results) {
        runInAction(() => {
          this.data = data.results;
          this.total = data.count;
          this.isLoading = false;
        });
      }
    });
  }
}
