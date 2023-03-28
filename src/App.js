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
import Login from "./Login";
import Register from "./Register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
      <div className="w-screen bg-blue-500 flex justify-end gap-12 box-border pr-[6rem] h-[3rem] items-center">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/login">log In</Link>
      </div>
      <div>
        <Outlet /> 
      </div>
    </>
  );
};
export default App;
