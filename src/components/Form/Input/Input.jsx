import React from 'react'
import './Input.css'
export default function ({ label, type, name, placeholder }) {
  return (
    <>
      <div className='input-container flex flex-col w-full text-white max-[600px]:w-full'>
        <label className='mb-1 mt-6 text-lg'>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className='text-slate-700 p-2 placeholder:text-sm placeholder:text-slate-700 placeholder:px-2 border-none outline-white'
        />
      </div>
    </>
  )
}
