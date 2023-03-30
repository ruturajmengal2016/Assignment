import React from "react";
import {
  createBrowserRouter,
  Link,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";
import Styles from "./Styles/App.module.scss";

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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div className={Styles.navigation}>
        <Link to="/" className={Styles.link}>First</Link>
        <Link to="/second" className={Styles.link}>Second</Link>
      </div>
      <div className={Styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
