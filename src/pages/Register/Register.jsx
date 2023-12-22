import React, { useEffect, useState } from 'react'
import './Register.css'
import FormConstractor from '../../components/Form/FormConstractor/FormConstractor'
import Input from '../../components/Form/Input/Input'
import { Link, json } from 'react-router-dom'
import Button from '../../components/Form/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

export default function Register () {
  // inputs validation
  const [phoneValidation, setPhoneValidation] = useState(false)
  const [phoneValue, setPhoneValue] = useState('')
  const [passwordValidation, setPasswordValidation] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [repeatpasswordValidation, setRepeatPasswordValidation] =
    useState(false)
  const [repeatPasswordValue, setrepeatPasswordValue] = useState('')

  // form validation
  const [isFormValid, setIsFormValid] = useState(false)

  // useEffect for set form validation
  useEffect(() => {
    if (
      phoneValidation &&
      passwordValidation &&
      repeatpasswordValidation &&
      passwordValue === repeatPasswordValue
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [
    phoneValidation,
    passwordValidation,
    repeatpasswordValidation,
    passwordValue,
    repeatPasswordValue
  ])

  // register
  const userRegister = event => {
    event.preventDefault()
    if (isFormValid) {
      axios
        .post('http://localhost:5000/api/Auth/Register', {
          phoneNumber: phoneValue,
          password: passwordValue,
          rePassword: repeatPasswordValue
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log('error', err.message)
        })
    } else {
      console.log('not valid')
    }
  }

  return (
    <>
      <Navbar />
      <div className="register-page bg-[url('/src/assets/images/bookcas.jpg')] bg-center bg-cover w-full h-screen py-20">
        <FormConstractor title='ثبت نام'>
          <form className='form flex flex-col justify-around w-full px-16 mt-10 max-[600px]:px-8 max-[600px]:mt-1'>
            <Input
              label='شماره تماس'
              type='text'
              name='phone'
              placeholder='09121111111'
              onValidation={(inputValue, isValid) => {
                setPhoneValidation(isValid)
                setPhoneValue(inputValue)
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
            <Input
              label='تایید رمز عبور'
              type='password'
              name='password'
              placeholder='* * * * * * * *'
              onValidation={(inputValue, isValid) => {
                setRepeatPasswordValidation(isValid)
                setrepeatPasswordValue(inputValue)
              }}
            />
            <Button
              type='submit'
              text='ثبت نام'
              onSubmitForm={() => userRegister(event)}
            />
          </form>
          <span className='to-register mt-8 text-white'>
            حساب کاربری دارم :
            <Link to='/login' className=' text-slate-800 underline'>
              ورود
            </Link>
          </span>
        </FormConstractor>
      </div>
      <Footer />
    </>
  )
}
