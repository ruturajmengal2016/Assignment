import React from "react";
import img1 from "./profile.jpg";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center h-screen items-center flex-col bg-red-400">
      <img
        src={img1}
        alt=""
        className="h-[10rem] w-[10rem] rounded-full translate-y-[50%] -z-0 ring-1 ring-black"
      />
      <div className="h-[20rem] w-[35rem] bg-white flex items-center">
        <div className="flex flex-col justify-center w-[100%] gap-4 mt-[3rem]">
          <input
            type="text"
            name="User Name"
            placeholder="Name"
            className="self-center border-2 border-black box-border p-1 w-[60%]"
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            className="self-center border-2 border-black box-border p-1 w-[60%]"
          />
          <div className="self-center flex justify-between w-[60%]">
            <div>
              <p>Don't have Account</p>
              <button className="underline decoration-2" onClick={()=>{
                navigate("/register")
              }}>Register</button>
            </div>
            <div>
              <button className="border-[1px] border-black box-border p-1 w-[8rem] bg-blue-600 rounded-md text-white">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
