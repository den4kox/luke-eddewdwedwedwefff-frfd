import { reaction } from "mobx";
import { IStore } from "../types";

export function handleFilterChange(store: IStore) {
  return reaction(
    () => ({
      text: store.filter.text,
      page: store.filter.page,
      resource: store.filter.resource,
    }),
    (current, prev) => {
      if (current.text !== prev.text || current.resource !== prev.resource) {
        store.filter.setPage(1);
      }
      store.load();
    }
  );
}
