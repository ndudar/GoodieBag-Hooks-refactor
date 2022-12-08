import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { Provider } from "react-redux";
import { store } from "./store";
const root = createRoot(document.getElementById("main"));
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>
);
