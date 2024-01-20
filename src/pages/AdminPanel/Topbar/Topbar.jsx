import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoMdLogOut } from 'react-icons/io'

export default function Topbar () {
  return (
    <div className='w-full h-16 bg-gray-500 text-white flex justify-around items-center'>
      <input type='text' className=' w-40 h-7 px-2 border-none rounded-xl outline-1 outline-zinc-300' placeholder='جستجو ...'/>

      <div className='notification-icon flex items-center'>
        <span className='ml-2'>پیام ها</span>
        <IoIosNotificationsOutline className='text-3xl' />
      </div>
      <div className='logout-icon flex items-center'>
        <span className='ml-2'>خروج از اکانت</span>
        <IoMdLogOut className='text-3xl' />
      </div>
    </div>
  )
}
