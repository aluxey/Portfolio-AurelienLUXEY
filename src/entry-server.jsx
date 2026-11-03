import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export { pages, site } from "./site";

export const render = (path) =>
  renderToString(
    <React.StrictMode>
      <App path={path} />
    </React.StrictMode>
  );
