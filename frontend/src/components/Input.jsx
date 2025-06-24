import React from 'react'

const Input = ({placehoder,type,name,onChange}) => {
  return (
   <input onChange={onChange} name={name} type={type} placeholder={placehoder} className='border-2 border-gray-300 w-full rounded-sm px-2 focus:outline-none py-2' required/>
  )
}

export default Input