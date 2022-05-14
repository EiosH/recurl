import { createRoot } from "react-dom/client";

import App1 from "./App1";
import App2 from "./App2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App1 />
    <App2 />
  </>
);
