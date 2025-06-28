import React, { useState } from 'react'
import {generateText} from "../../api/api"
const SearchAi = () => {
    const [prompt,setPrompt]=useState("");
    const [response,setResponse]=useState("");
    const handleSumbit=async(e)=>{
      e.preventDefault();
     
    try{
     let result= await generateText(prompt);
     console.log(result.data.reply);
    }catch(err){console.log(err)}
    }
  return (
  <form  className='flex items-center justify-center' onSubmit={handleSumbit}>
    <input className='border-2 rounded-lg mr-4 border-gray-400 focus:outline-none px-2 w-full py-2' placeholder='Ask Anything' name='prompt' onChange={(e)=>setPrompt(e.target.value) } value={prompt}/>
    <button className='inline bg-indigo-900 w-56 rounded-full py-2 text-white'> Ask Gemini</button>
  </form>
  )
}

export default SearchAi