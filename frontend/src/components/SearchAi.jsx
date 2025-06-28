import React, { useState, useTransition } from 'react'
import {generateText} from "../../api/api"
import { FiX } from "react-icons/fi";
const SearchAi = () => {
    const [prompt,setPrompt]=useState("");
    const [response,setResponse]=useState("");
    const[show,setShow]=useState(false);
    const [loading,setLoading]=useState(false)
    const handleSumbit=async(e)=>{
      e.preventDefault();
      if(!prompt.trim()) return;
      setLoading(true)
      setResponse("");
     
    try{

     let result= await generateText(prompt);
     if(result){
      setShow(true);
     }
     setResponse(result.data.reply);
    }catch(err)
    {console.log(err)}
    setPrompt("");
    setLoading(false);
    }
  return (
    <div className='w-full  z-10 flex flex-col items-center  '>

  <form  className='flex items-center justify-center gap-5' onSubmit={handleSumbit}>
    <input className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder='Ask Anything' name='prompt' onChange={(e)=>setPrompt(e.target.value) } value={prompt} autoComplete='off'/>
   {loading? (<div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
    </div>) :  (<button className='bg-indigo-900 w-56 rounded-full py-2 text-white'> Ask Gemini</button>)}
  </form>
   {show && <div className="bg-gray-800 w-1/2 h-auto z-10 absolute top-20 rounded-2xl p-5 ">
   <button onClick={()=>setShow(false)} className='text-right w-full flex  justify-end '><FiX className='text-white text-3xl  mb-5 mr-2'/></button>
  <p className="text-white font-sans text-lg">{response}</p>
 </div>}
 
    </div>
  )
}

export default SearchAi