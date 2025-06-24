

import { NavLink, useNavigate } from 'react-router-dom'
import Input from "../components/Input"
import { register } from '../../api/api'
import { useEffect, useState } from 'react'

const Sinup = () => {
  const [formdata,setFormData]=useState({name:"",email:"",password:"",phone:""});

  const navigator = useNavigate();

  const handelChange=async(e)=>{
    
   setFormData({...formdata, [e.target.name]:e.target.value});
 
  }
  const handleSumbit=async(e)=>{
    e.preventDefault();
    try{
      await register(formdata);
        alert("Succesfull Register");
        navigator("/dashboard")
    }catch(err){
      alert(err.response?.data?.msg || "Error")
    }
 };

  useEffect(()=>{
  setFormData({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  },[])
  return (
    <div className="h-screen w- bg-white flex items-center justify-center ">
      <form
      
        onSubmit={handleSumbit}
        className="h-[60vh] w-[90vw] shadow-xl/20 bg-white p-3 flex justify-start flex-col sm:h-[60vh] md:w-[60vw] md:h-[80vh] "
      >
        <h1 className="font-bold text-2xl text-center">Welcome to  DromKart</h1>
        <label className="block font-bold mb-3 mt-3">Enter your Name:</label>
        <Input onChange={handelChange} name="name" placehoder="username" type="text" />

          <label className="block font-bold mb-3 mt-3">Enter your Email:</label>
        <Input onChange={handelChange} name="email" placehoder="E-mail" type="email" />

          <label className="block font-bold mb-3 mt-3">Enter your No:</label>
        <Input onChange={handelChange} name="phone" placehoder="phone" type="number" />

        <label className="block font-bold mb-3 mt-3">Password:</label>
        <Input onChange={handelChange} name="password" placehoder="password" type="password" />

        <div className="flex items-center justify-center text-center mt-5 gap-5">
          <button className="bg-blue-600   border-none px-3  text-white font-bold rounded-sm py-1.5 ">
            Singup
          </button>
          <span>
            <NavLink to="/login" className="text-blue-900 underline-offset-6  underline font-bold">login?</NavLink>
          </span> 
        </div>
      </form>
    </div>
  )
}

export default Sinup