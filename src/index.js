
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Bill from "./Components/Bill";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/bill" element={<Bill />} />
    </Route>
  )
);
root.render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
