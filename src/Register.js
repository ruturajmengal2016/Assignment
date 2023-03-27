import React from "react";

function Register() {
  return (
    <div className="h-screen bg-red-400 flex justify-center items-center">
      <div className="flex flex-col justify-center w-[40%] gap-4 mt-[3rem] bg-white box-border p-6 h-[50%]">
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="self-center border-2 border-black box-border p-1 w-[60%]"
        />
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
        <button className="self-end box-border -translate-x-[8rem] bg-blue-600 p-2 w-[25%] rounded-md text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
