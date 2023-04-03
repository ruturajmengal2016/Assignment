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
import First from "./Pages/First";
import Second from "./Pages/Second";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<First />} />
        <Route path="/second" element={<Second />} />
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
          First
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
