import React from 'react'
import './FormConstractor.css'
export default function FormConstractor ({ children, title }) {
  return (
    <div className='form-container w-[480px] h-fit py-6 mx-auto overflow-hidden flex justify-center items-center flex-col max-[600px]:w-3/4'>
      <h2 className='text-white text-5xl'>{title}</h2>
      {children}
    </div>
  )
}