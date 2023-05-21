import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Task from "./Pages/Task";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <App />
          <Outlet />
        </>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/task" element={<Task />} />
    </Route>
  )
);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

reportWebVitals();
