import React from "react";
import {
  createBrowserRouter,
  Link,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Guess from "./Guess";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route index path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guess" element={<Guess />} />
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
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/guess">Guess</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
