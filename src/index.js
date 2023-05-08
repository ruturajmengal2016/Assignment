import React from "react";
import ReactDOM from "react-dom/client";
import Style from './App.module.scss'
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<App />} />
    </Route>
  )
);
root.render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
);
