import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom'
import { IoBookOutline } from 'react-icons/io5'
export default function CategoryCard ({ categoryName }) {
  return (
    <Link
      to='/'
      className='card w-8/12 bg-slate-800 mt-8 cursor-pointer rounded-2xl mx-auto'
    >
      <div className='overlay'></div>
      <div className='circle'>
        <IoBookOutline className='text-6xl text-white' />
      </div>
      <p className='text-white'>{categoryName}</p>
    </Link>
  )
}
