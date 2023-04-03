import React from "react";
import {
  createBrowserRouter,
  Link,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Styles from "./Styles/App.module.scss";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/second" element="" />
      </Route>
    )
  );
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

const Root = () => {
  return (
    <>
      <div className={Styles.navigation}>
        <Link to="/" className={Styles.link}>
          Home
        </Link>
        <Link to="/second" className={Styles.link}>
          Second
        </Link>
      </div>
      <div className={Styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
