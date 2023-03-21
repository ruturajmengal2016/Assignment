<<<<<<< HEAD
import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
 
function App() {
  return (
    <div className='h-screen p-5 flex flex-col gap-3'>
      <Nav />
      <Hero />
    </div>
  )
=======
import React from "react";
import Header from "./Header";
import Hero from "./Hero";


function App() {
  return <div className="h-screen bg-red-500 sm:bg-blue-500">
    <Header />
    <Hero />
  </div>;
>>>>>>> master
}

export default App