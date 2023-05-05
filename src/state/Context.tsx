import * as React from "react";

import { IStore } from "./types";

export const StoreContext = React.createContext<unknown | null>(null);

export function withStoreProvider(
  store: IStore,
  Component: React.FC
): JSX.Element {
  return (
    <StoreContext.Provider value={store}>
      <Component />
    </StoreContext.Provider>
  );
}

export function useStore(): IStore | never {
  const store = React.useContext(StoreContext) as IStore;
  if (!store) {
    throw new Error("Store should be provided to StoreContext");
  }
  return store;
}
