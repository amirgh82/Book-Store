import React from 'react'
import './Button.css'
export default function Button ({ text }) {
  return (
    <button
      className='button relative text-2xl mt-8 px-8 py-2 rounded-3xl bg-white isolation-auto z-10 border-2 border-slate-800
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-slate-800 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 hover:text-white'
    >
      {text}
    </button>
  )
}
