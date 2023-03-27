import React from "react";
import img1 from "./profile.jpg";
function About() {
  return (
    <div className="h-screen flex items-start flex-col p-5 gap-16">
      <div className="flex justify-center items-center ">
        <h1 className="border-r-[1px] border-gray-400 pr-4 h-[5rem] font-bold flex justify-center items-center text-[1.5rem]">
          About Us
        </h1>
      </div>
      <div className="flex">
        <div className="w-[25rem]">
          <img
            src={img1}
            alt=""
            className="h-[12rem] w-[12rem] border-2 border-black rounded-[1rem]"
          />
          <span className="text-blue-600">Age:22</span> <br />
          <span className="text-blue-600">Location:India</span>
        </div>
        <div className="self-start flex flex-col justify-between p-3 text-justify h-[19rem]">
          <p className="w-[80%]">
            My name is Emile. I’m from Nashik where I finished my schooling last
            year from Bhujbal. Is there anyone here from my city? OK, few. I
            like watching movies, at least once a month. I play basketball on
            weekends and chess whenever I get time. I’m into reading thriller
            novels as well, Dan Brown being my favorite novelist.
          </p>
          <div className="flex gap-3">
            <div className="h-[8rem] w-[20rem] bg-blue-400 box-border p-1">
              <h1>What are the Skills?</h1>
              <ul className="list-[square] pl-5">
                <li>Python</li>
                <li>Javascript</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="h-[8rem] w-[20rem] bg-blue-400 box-border p-1">
              <h1>What are my Hobbies?</h1>
              <ul className="list-[square] pl-5">
                <li>Drawing</li>
                <li>Gaming</li>
                <li>Travelling</li>
              </ul>
            </div>
            <div className="h-[8rem] w-[20rem] bg-blue-400 box-border p-1">
              <h1>What are you learning?</h1>
              <ul className="list-[square] pl-5">
                <li>React.js</li>
                <li>MongoDb</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
