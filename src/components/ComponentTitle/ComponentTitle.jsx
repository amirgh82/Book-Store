import React from 'react'
import './ComponentTitle.css'

export default function ComponentTitle ({ title }) {
  return (
    <h4 className='title relative text-xl after:bg-slate-500 before:bg-slate-500'>
      {title}
    </h4>
  )
}
