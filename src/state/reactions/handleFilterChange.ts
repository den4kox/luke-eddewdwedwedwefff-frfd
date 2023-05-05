import { reaction } from "mobx";
import { IStore } from "../types";

export function handleFilterChange(store: IStore) {
  return reaction(
    () => ({ text: store.filter.text, page: store.filter.page }),
    (current, prev) => {
      if (current.text !== prev.text) {
        store.filter.setPage(1);
      }
      store.people.loadCharacters();
    }
  );
}
