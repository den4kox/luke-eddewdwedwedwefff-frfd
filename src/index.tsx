import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

import { withStoreProvider, Store } from "./state";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const store = new Store();

const appWithStore = withStoreProvider(store, App);

root.render(<React.StrictMode>{appWithStore}</React.StrictMode>);
