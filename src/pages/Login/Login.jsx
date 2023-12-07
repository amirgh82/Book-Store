import React from 'react'
import './Login.css'
import Input from '../../components/Form/Input/Input'
import Button from '../../components/Form/Button/Button'
import { Link } from 'react-router-dom'
import FormConstractor from '../../components/Form/FormConstractor/FormConstractor'
export default function Login () {
  return (
    <div className="login-page bg-[url('/src/assets/images/interior_night.jpg')] bg-center bg-cover w-full h-screen overflow-hidden">
      <FormConstractor title='ورود'>
        <form className='form flex flex-col justify-around w-full px-16 mt-10 max-[600px]:px-8 max-[600px]:mt-1'>
          <Input
            label='شماره تماس'
            type='number'
            name='phone'
            placeholder='09121111111'
          />
          <Input
            label='رمز عبور'
            type='password'
            name='password'
            placeholder='********'
          />
          <span className='text-white mt-3 text-sm'>
            <Link to='/'>رمز عبور خود را فراموش کرید ؟</Link>
          </span>
          <Button text='ورود' />
        </form>
        <span className='to-register mt-8 text-white'>
          حساب کاربری ندارم :{' '}
          <Link to='/register' className=' text-slate-800 underline'>
            ثبت نام
          </Link>
        </span>
      </FormConstractor>
    </div>
  )
}
