import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
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
      <div>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default App;
