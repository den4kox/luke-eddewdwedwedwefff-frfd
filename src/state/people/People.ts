import { ICharacter, IPeopleStore, PeopleStoreProps } from "./types";
import { makeObservable, observable, runInAction } from "mobx";

import { cachedFetch } from "../../utils/fetch";
import { baseUrl } from "../../const/url";

class PeopleStore implements IPeopleStore {
  public total = 0;
  public characters: ICharacter[] = [];
  public constructor(private root: PeopleStoreProps) {
    makeObservable(this, {
      characters: observable,
      total: observable
    });

    this.loadCharacters();
  }

  public async loadCharacters() {
    const url = new URL(baseUrl + "people");
    if (this.root.filter.text) {
      url.searchParams.append("search", this.root.filter.text);
    }

    url.searchParams.append("page", String(this.root.filter.page));

    const data = await cachedFetch(url.toString());
    console.log("data", data, data.results);
    if (data.results) {
      console.log("data2", data);
      runInAction(() => {
        this.total = data.count;
        this.characters = data.results;
      });
    }

    console.log("LLL", this.characters);
  }
}

export function createPeopleStore(root: PeopleStoreProps): IPeopleStore {
  return new PeopleStore(root);
}
