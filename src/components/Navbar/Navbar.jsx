import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const showNavbar = event => {
    setIsShowMenu(event.target.checked)
  }


  return (
    <div className='container m-auto lg:px-20 px-12 max-[400px]:px-5'>
      <nav className='flex justify-around items-center w-full bg-slate-800 text-white mt-6 py-6 rounded-b-full rounded-tl-full '>
        <h3 className='logo text-lg'>
          <Link to='/'>BoundlessBook</Link>
        </h3>
        <ul className='nav-lists flex max-[768px]:hidden'>
          <li className='nav-list'>
            <Link to='/' className='nav-link'>
              صفحه اصلی
            </Link>
            <span></span>
          </li>
          <li className='nav-list'>
            <Link to='/category' className='nav-link mx-5'>
              دسته بندی ها
            </Link>
          </li>
          <li className='nav-list'>
            <Link to='/contact' className='nav-link'>
              تماس با ما
            </Link>
          </li>
        </ul>
        <label
          onClick={() => showNavbar(event)}
          className='burger max-[768px]:block min-[768px]:hidden relative w-9 h-6 bg-transparent cursor-pointer'
        >
          <input type='checkbox' id='burger' />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <Link className='login  max-[768px]:hidden' to='/login'>
          ورود / ثبت نام
        </Link>
      </nav>

      <nav
        className={`nav-responsive transition-all delay-300 max-[768px]:${
          isShowMenu
            ? 'flex bg-gray-700 w-8/12 h-screen absolute top-0 right-0'
            : '-right-full'
        } `}
      ></nav>
    </div>
  )
}
