import React from 'react'

function Header() {
  return (
    <div className='self-center flex '>
        <input type="text" className='peer block min-h-min w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"' placeholder='Search...' />
        &nbsp;
        <button className='text-[0.5rem] w-fit h-fit p-1 self-center border-red-500 text-blue-50 bg-blue-700 rounded-lg'>Search</button>
    </div>
  )
}

export default Header