import React from 'react'
import './Book.css'
import { Link } from 'react-router-dom'

export default function Book () {
  return (
    <Link
      to='/'
      className='card-book w-full bg-slate-800 bg-clip-border h-fit text-white shadow-md rounded-2xl'
    >
      <div className='card-book-img  h-40 overflow-hidden rounded-t-2xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
        <img src='/src/assets/images/effect.jpg' alt='' className='w-full' />
      </div>
      <div className='p-6'>
        <h5 className='card-book-title text-2xl  mb-2 block leading-snug tracking-normal text-blue-gray-900 antialiased'>
          اثر مرکب
        </h5>
        <p className='card-book-desc block text-base font-light leading-relaxed text-inherit antialiased'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      <div className='p-6 pt-0'>
        <button
          data-ripple-light='true'
          type='button'
          className='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        >
          مشاهده کتاب
        </button>
      </div>
    </Link>
  )
}
