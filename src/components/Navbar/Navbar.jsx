import React, { useState } from 'react'
import './Navbar.css'
import { IoIosArrowBack } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'

import { Link } from 'react-router-dom'

export default function Navbar () {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const showNavbar = event => {
    setIsShowMenu(event.target.checked)
  }

  return (
    <div className='container m-auto lg:px-20 px-12 max-[500px]:px-0'>
      <nav className='flex justify-around items-center w-full bg-slate-800 text-white py-8 rounded-b-full'>
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
            <Link to='/category' className='nav-link mx-7 flex items-center'>
              دسته بندی ها
              <IoIosArrowBack className='mr-1 arrow' />
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
        className={`nav-responsive overflow-y-auto rounded-bl-2xl hidden	text-white px-5 transition-all max-[768px]:${
          isShowMenu ? 'flex' : 'hidden'
        } flex-col bg-gray-700 w-8/12 h-3/4 fixed top-0 right-0`}
      >
        <h3 className='logo text-lg mt-6'>
          <Link to='/'>BoundlessBook</Link>
        </h3>
        <ul className='nav-lists-mobile mt-6'>
          <li className='nav-list-mobile py-2'>
            <Link to='/' className='nav-link-mobile'>
              صفحه اصلی
            </Link>
            <span></span>
          </li>
          <li className='nav-list-mobile'>
            <Link to='/category' className='nav-link-mobile flex items-center'>
              دسته بندی ها
              <IoIosArrowBack className='mr-1 arrow' />
            </Link>
          </li>
          <li className='nav-list-mobile'>
            <Link to='/contact' className='nav-link-mobile'>
              تماس با ما
            </Link>
          </li>
          <li className='nav-list-mobile'>
            <Link to='/' className='nav-link-mobile'>
              تست 1
            </Link>
          </li>
          <li className='nav-list-mobile'>
            <Link to='/' className='nav-link-mobile'>
              تست 2
            </Link>
          </li>
          <li className='nav-list-mobile'>
            <Link to='/' className='nav-link-mobile'>
              تست 3
            </Link>
          </li>
        </ul>
        <ul className='media-container flex justify-around mt-6'>
          <li className='media border-2 border-white border-solid p-4 text-2xl rounded-full max-[400px]:p-2'>
            <FaInstagram />
          </li>
          <li className='media border-2 border-white border-solid p-4 text-2xl rounded-full max-[400px]:p-2'>
            <FaLinkedinIn />
          </li>
          <li className='media border-2 border-white border-solid p-4 text-2xl rounded-full max-[400px]:p-2'>
            <BsTwitterX />
          </li>
        </ul>
      </nav>
    </div>
  )
}
