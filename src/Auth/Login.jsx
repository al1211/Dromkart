import React, { useState } from "react";
import Input from "../components/Input";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

  const Navigate=useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();
  };
  const handleDashboard=(e)=>{
    
    Navigate('/dashboard');
  };
  return (
    <div className="flex  justify-center items-center h-screen p-0.5">
      <form
        onSubmit={handleSumbit}
        className="h-[40vh] w-[90vw] shadow-xl/20 bg-white p-3 flex justify-start flex-col  sm:w-[90vw] md:w-[40vw] md:h-[50vh]"
        
      >
        <h1 className="font-bold text-2xl text-center"> Welcome to DromKart</h1>
        <label className="block font-bold mb-3 mt-3">UserName:</label>
        <Input placehoder="username" type="text" />

        <label className="block font-bold mb-3 mt-3">Password:</label>
        <Input placehoder="password" type="password" />

        <div className="flex items-center justify-center text-center mt-5 gap-5">
          <button onClick={handleDashboard} className="bg-blue-600   border-none px-3  text-white font-bold rounded-sm py-1.5 ">
            Sumbit
          </button>
          <span>
            <NavLink to="/sinup" className="text-blue-900 underline-offset-6  underline font-bold">Singup?</NavLink>
          </span> 
        </div>
      </form>
    </div>
  );
};

export default Login;
