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
}

export default App