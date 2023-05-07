import React from "react";

import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./style.css";

import { withStoreProvider, Store } from "./state";
import { EResources } from "./types";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const params = new URLSearchParams(location.search);
const text = params.get("text");
const page = params.get("page") ? Number(params.get("page")) : null;
const resource: EResources | undefined = params.get("resource") as EResources;

const store = new Store({
  text: text,
  page: page,
  resource: resource,
});

const appWithStore = withStoreProvider(store, Router);

root.render(<React.StrictMode>{appWithStore}</React.StrictMode>);
