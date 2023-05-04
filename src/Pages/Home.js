import React from "react";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg')] bg-no-repeat bg-cover overflow-hidden">
      <span className="sm:text-[8rem] w-fit text-center font-mono font-bold text-red-400 animate-pulse text-[3rem] h-fit">
        <span className="text-blue-500 italic -z-1">Nobelium</span> Web Development
        cohort
      </span>
    </div>
  );
}

export default Home;
