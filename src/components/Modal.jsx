import React from 'react'
import Form from './Form'



const Modal = ({show}) => {
  return (
    <div className='h-full w-full bg-black absolute top-0 left-0 opacity-90 flex items-center justify-center'>
        <Form show={show}/>
    </div>
  )
}

export default Modal