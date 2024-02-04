import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export default function Sidebar () {
  return (
    <div className='sidebar-container py-6 pr-3 text-teal-50 h-screen bg-slate-600'>
      <div className='admin-info border-y-2 border-gray-500 border-solid py-3 flex items-center justify-around'>
        <img
          src='/src/assets/images/me.jpg'
          alt='admin photo'
          className=' w-8 h-8 rounded-full'
        />
        <h3 className='admin-name'>امیررضا قربانی</h3>
      </div>
      <div className='sidebar-menu'>
        <ul className='sidebar-lists w-full'>
          <li className='mt-3 hover:bg-slate-500 w-full p-2 block rounded-lg'>
            <Link to='' className='sidebar-link'>
              صفحه اصلی
            </Link>
          </li>
          <li className='mt-3 hover:bg-slate-500 w-full p-2 block rounded-lg'>
            <Link to='users' className='sidebar-link'>
              کاربران
            </Link>
          </li>
          <li className='mt-3 hover:bg-slate-500 w-full p-2 block rounded-lg'>
            <Link to='books' className='sidebar-link'>
              کتاب ها
            </Link>
          </li>
          <li className='mt-3 hover:bg-slate-500 w-full p-2 block rounded-lg'>
            <Link to='categories' className='sidebar-link'>
              دسته بندی ها
            </Link>
          </li>
          <li className='mt-3 hover:bg-slate-500 w-full p-2 block rounded-lg'>
            <Link to='orders' className='sidebar-link'>
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
