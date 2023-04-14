import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Style from './App.module.scss'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <div className={Style.outlet}
            >
              <Outlet />
            </div>
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <div className={Style.root}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
