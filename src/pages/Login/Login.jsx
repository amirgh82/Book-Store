import React from 'react'
import './Login.css'
import Input from '../../components/Form/Input/Input'
import Button from '../../components/Form/Button/Button'
import { Link } from 'react-router-dom'
export default function Login () {
  return (
    <div className="login-page bg-[url('/src/assets/images/interior_night.jpg')] bg-center bg-cover w-full h-screen overflow-hidden">
      <div className='form-container w-[480px] h-[70vh] absolute inset-0 m-auto bg-[#ffffff2b] rounded-3xl shadow-md backdrop-blur overflow-hidden flex justify-center items-center flex-col'>
        <h2 className='text-white text-5xl'>ورود</h2>
        <form className='form flex flex-col justify-around w-full px-16 mt-10 '>
          <Input
            label='شماره تماس'
            type='number'
            name='phone'
            placeholder='شماره تماس'
          />
          <Input
            label='رمز عبور'
            type='password'
            name='password'
            placeholder='رمز عبور'
          />
          <span className='text-white mt-3 text-sm'>
            <Link to='/'>رمز عبور خود را فراموش کرید ؟</Link>
          </span>
          <Button text='ورود' />
        </form>
        <span  className='to-register mt-8 text-white'>
          حساب کاربری ندارم : <Link to='/register' className=' text-slate-800 underline'>ثبت نام</Link>
        </span>
      </div>
    </div>
  )
}
