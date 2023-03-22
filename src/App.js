import React from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import img1 from "./Images/first.jpg";
import img2 from "./Images/second.jpg";
import img3 from "./Images/third.jpg";
import img4 from "./Images/forth.jpg";
import img5 from "./Images/fifth.jpg";

function App() {
  const data = [
    { image: img1, name: "John Quil", design: "Developer", exp: 2 },
    { image: img2, name: "Del Phineum", design: "Designer", exp: 3 },
    { image: img3, name: "Rose Bush", design: "Singer", exp: 6 },
    { image: img5, name: "Paige Turner", design: "Project Man.", exp: 4 },
    { image: img4, name: "Anita Bath", design: "Programmer", exp: 5 },
  ];
  return (
    <div className="h-screen bg-orange-300 flex justify-center items-center">
      <BsFillArrowLeftCircleFill size={30} fill="red" className="translate-x-3" />
      <div className="w-[80%] bg-blue-200 h-[15rem] flex items-center gap-4 box-border overflow-x-auto pl-5 pr-5">
        {data.map((ele, ind) => {
          return (
            <div className="h-[12rem] min-w-[20rem] bg-white flex flex-col justify-center items-center rounded-lg shadow-md shadow-gray-600 text-[1rem] font-bold" key={ind}>
              <img
                src={ele.image}
                alt=""
                className="rounded-full h-[4rem] w-[4rem] ring-1 ring-black"
              />
              <span>{ele.name}</span>
              <span>{ele.design}</span>
              <span>{ele.exp} Year's Exp.</span>
            </div>
          );
        })}
      </div>
      <BsFillArrowRightCircleFill size={30} fill="red" className="-translate-x-3" />
    </div>
  );
}

export default App;
