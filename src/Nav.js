import React from 'react'

function Nav() {
  return (
    <>
        <nav className='sm_short:flex sm_short:justify-start sm_short:gap-2 sm_short:w-[100%] sm_short:text-[0.75rem] flex justify-between'>
            <img src="https://plugg.to/wp-content/uploads/2020/04/Onclick-01-1-1024x289.png" alt="" className='max-w-[360px] sm_short:h-[2rem] sm_short:w-[8rem] w-[8rem]' />
            <ul className='sm_short:self-center sm_short:flex sm_short:justify-center sm_short:gap-2 sm_short:w-[40%] hidden'>
                <li>Home</li>
                <li>Service</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
            <ul className='sm_short:self-center sm_short:flex sm_short:justify-end sm_short:gap-3 sm_short:w-[40%] hidden'>
                <li className='p-1'>Log In</li>
                <li className='border-2 rounded-lg p-1 border-orange-500'>Sign Up</li>
            </ul>
            <button className='sm_short:hidden w-[50%] flex justify-end h-[2rem]'>&#9776;</button>
        </nav>
    </>
  )
}

export default Nav