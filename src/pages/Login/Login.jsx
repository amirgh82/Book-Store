import React, { useState } from 'react'
import './Login.css'
import Input from '../../components/Form/Input/Input'
import Button from '../../components/Form/Button/Button'
import { Link } from 'react-router-dom'
import FormConstractor from '../../components/Form/FormConstractor/FormConstractor'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import axios from 'axios'
export default function Login () {
  // inputs validation
  const [phoneValidation, setPhoneValidation] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')
  const [passwordValidation, setPasswordValidation] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')

  // form validation
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if (passwordValidation && phoneValidation) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [phoneValidation, passwordValidation])

  const userLogin = event => {
    event.preventDefault()

    console.log(phoneValue)
    console.log(passwordValue)

    if (isFormValid) {
      axios
        .post('http://localhost:5000/api/Auth/Login', {
          phoneNumber: phoneValue,
          password: passwordValue
        })
        .then(response => {
          console.log(response)
        })
    } else {
      console.log('not login')
    }
  }

  return (
    <>
      <Navbar />
      <div className="login-page bg-[url('/src/assets/images/interior_night.jpg')] bg-center bg-cover w-full h-screen pt-20">
        <FormConstractor title='ورود'>
          <form className='form flex flex-col justify-around w-full px-16 mt-10 max-[600px]:px-8 max-[600px]:mt-1'>
            <Input
              label='شماره تماس'
              type='number'
              name='phone'
              placeholder='09121111111'
              onValidation={(inputValue, isValid) => {
                setPhoneValue(inputValue)
                setPhoneValidation(isValid)
              }}
            />
            <Input
              label='رمز عبور'
              type='password'
              name='password'
              placeholder='* * * * * * * *'
              onValidation={(inputValue, isValid) => {
                setPasswordValidation(isValid)
                setPasswordValue(inputValue)
              }}
            />
            <span className='text-white mt-3 text-sm'>
              <Link to='/'>رمز عبور خود را فراموش کرید ؟</Link>
            </span>
            <Button text='ورود' onSubmitForm={() => userLogin(event)} />
          </form>
          <span className='to-register mt-8 text-white'>
            حساب کاربری ندارم :{' '}
            <Link to='/register' className=' text-slate-800 underline'>
              ثبت نام
            </Link>
          </span>
        </FormConstractor>
      </div>
      <Footer />
    </>
  )
}
