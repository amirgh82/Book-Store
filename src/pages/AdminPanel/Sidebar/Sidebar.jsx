import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export default function Sidebar () {
  return (
    <div className='sidebar-container text-teal-50 h-screen bg-slate-600'>
      <div className='sidebar-menu'>
        <ul className='sidebar-lists py-6 pr-3 w-full'>
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
            <Link to='orders' className='sidebar-link'>
              تخفیف ها
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
