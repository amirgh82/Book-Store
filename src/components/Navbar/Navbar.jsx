import React, { useState } from 'react'
import './Navbar.css'
import { IoIosArrowBack } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { BsTwitterX } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiMenu4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Navbar () {
  // Management of menu display in mobile size
  const [isShowMenu, setIsShowMenu] = useState(false)
  const [isShowCategory, setIsShowCategory] = useState(false)

  return (
    <div className='m-auto'>
      {/* Start menu in desktop size */}

      <nav className='flex justify-around items-center w-full bg-slate-800 text-white py-5'>
        <RiMenu4Fill
          onClick={() => setIsShowMenu(true)}
          className='text-5xl hidden cursor-pointer max-[768px]:block'
        />
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
          <li className='nav-list nav-sub relative'>
            <Link to='/category' className='nav-link mx-7 flex items-center'>
              دسته بندی ها
            </Link>
            <ul className='nav-submenu rounded-2xl absolute w-52 bg-slate-600 z-40 overflow-hidden'>
              <li className=' cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1'>
                <Link className='nav-submenu-link w-full'>تست 1</Link>
              </li>
              <li className='cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1'>
                <Link className='nav-submenu-link w-full'>تست 2</Link>
              </li>
              <li className=' cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1'>
                <Link className='nav-submenu-link w-full'>تست 3</Link>
              </li>
            </ul>
          </li>
          <li className='nav-list'>
            <Link to='/contact' className='nav-link'>
              تماس با ما
            </Link>
          </li>
        </ul>
        <Link
          to='/login'
          className='smky-btn3 relative hover:text-[#fff] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-gray-400	after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white max-[300px]:px-1'
        >
          ورود / ثبت نام
        </Link>
      </nav>
      {/* Complete menu in desktop size */}

      {/* Start menu in mobile size */}
      <nav
        className={`nav-responsive z-50 overflow-y-auto rounded-bl-2xl hidden	text-white px-5 transition-all max-[768px]:${
          isShowMenu ? 'block' : 'hidden'
        } flex-col bg-gray-700 w-7/12 h-3/4 fixed top-0 right-0`}
      >
        <div className='flex items-center justify-between mt-5 max-[400px]:flex-col-reverse'>
          <h3 className='logo text-lg'>
            <Link to='/'>BoundlessBook</Link>
          </h3>
          <RiCloseCircleLine
            className=' text-5xl cursor-pointer mb-2'
            onClick={() => setIsShowMenu(false)}
          />
        </div>
        <ul className='nav-lists-mobile mt-6'>
          <li className='nav-list-mobile py-2'>
            <Link to='/' className='nav-link-mobile'>
              صفحه اصلی
            </Link>
            <span></span>
          </li>
          <li className='nav-list-mobile relative'>
            <span
              onClick={() => setIsShowCategory(prev => !prev)}
              className='nav-link-mobile flex items-center'
            >
              دسته بندی ها
              <IoIosArrowBack className='mr-1 arrow' />
            </span>
            {isShowCategory ? (
              <ul
                className={`nav-submenu nav-submenu-mobile overflow-hidden ${
                  isShowCategory ? 'h-fit' : 'h-0'
                }  w-full rounded-2xl bg-slate-600 px-2 mt-2`}
              >
                <li className=' mt-2 cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1 rounded-md'>
                  <Link className='nav-submenu-link w-full'>تست 1</Link>
                </li>
                <li className='cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1 rounded-md'>
                  <Link className='nav-submenu-link w-full'>تست 2</Link>
                </li>
                <li className=' cursor-pointer w-full hover:bg-slate-400 my-2 py-1 pr-1 rounded-md'>
                  <Link className='nav-submenu-link w-full'>تست 3</Link>
                </li>
              </ul>
            ) : (
              ''
            )}
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
        <ul className='media-container flex justify-around m-6'>
          <li className='media border-2 border-white border-solid p-3 text-2xl rounded-full max-[400px]:p-2 mx-1'>
            <FaInstagram />
          </li>
          <li className='media border-2 border-white border-solid p-3 text-2xl rounded-full max-[400px]:p-2 mx-1'>
            <FaLinkedinIn />
          </li>
          <li className='media border-2 border-white border-solid p-3 text-2xl rounded-full max-[400px]:p-2 mx-1'>
            <BsTwitterX />
          </li>
        </ul>
      </nav>
      {/* Complete menu in mobile size */}
    </div>
  )
}
