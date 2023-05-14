import React from "react";
import ReactDOM from "react-dom/client";
import Style from "./App.module.scss";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import store from "./Redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index path="/" element={<Login />} />
      <Route path="/chat" element={<App />} />
    </Route>
  )
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
