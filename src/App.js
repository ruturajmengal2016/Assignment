import React from "react";
import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route to="/about" element={<About />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
const Root = () => {
  return (
    <>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
