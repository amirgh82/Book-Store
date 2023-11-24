import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom'
import { IoBookOutline } from 'react-icons/io5'
export default function CategoryCard ({ categoryName }) {
  return (
    <Link
      to='/'
      class='card w-full bg-slate-800 mt-8 cursor-pointer rounded-2xl mx-auto'
    >
      <div class='overlay'></div>
      <div class='circle'>
        <IoBookOutline className='text-6xl text-white' />
      </div>
      <p className='text-white'>{categoryName}</p>
    </Link>
  )
}
