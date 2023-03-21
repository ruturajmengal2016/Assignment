import React, { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[100%] p-2">
      <img src="https://miro.medium.com/v2/resize:fit:1400/1*dLaDL-lSN0iprzmOpmM7zQ.png" alt="" className="sm:hidden inline w-10 h-5" />
      <nav className="hidden sm:flex justify-between">
        <ul className="flex gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-2">
          <li>Services</li>
          <li>products</li>
        </ul>
      </nav>
      <button
        className="flex float-right sm:hidden"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show? <span>&#x2716;</span>:<span>&#9776;</span>}
      </button>
      {show ? <Mobile /> : " "}
    </div>
  );
}

function Mobile() {
  return (
    <div className="flex justify-center bg-slate-500 mt-[2rem] text-white">
      <nav>
        <ul className="grid grid-cols-1">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>products</li>
        </ul>
      </nav>
    </div>
  );
}



export default Header;
