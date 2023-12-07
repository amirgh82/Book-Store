import React from 'react'
import './Register.css'
import FormConstractor from '../../components/Form/FormConstractor/FormConstractor'
import Input from '../../components/Form/Input/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/Form/Button/Button'
export default function Register () {
  return (
    <div className="register-page bg-[url('/src/assets/images/bookcas.jpg')] bg-center bg-cover w-full h-screen overflow-hidden">
      <FormConstractor title='ثبت نام'>
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
          <Input
            label='تایید رمز عبور'
            type='password'
            name='password'
            placeholder='********'
          />
          <Button text='ثبت نام' />
        </form>
        <span className='to-register mt-8 text-white'>
          حساب کاربری دارم :
          <Link to='/login' className=' text-slate-800 underline'>
            ورود
          </Link>
        </span>
      </FormConstractor>
    </div>
  )
}
