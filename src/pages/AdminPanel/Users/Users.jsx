import React, { useState, useEffect } from 'react'
import Input from '../../../components/Form/Input/Input'
import Button from '../../../components/Form/Button/Button'
import axios from 'axios'
export default function Users () {
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastNameValid, setLastNameValid] = useState(false)
  const [lastName, setLastName] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [email, setEmail] = useState('')
  const [phoneValid, setPhoneValid] = useState(false)
  const [phone, setPhone] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState(0)

  const [isShowModal, setIsShowModal] = useState(false)

  // form validation
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      phoneValid &&
      passwordValid
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [firstNameValid, lastNameValid, emailValid, phoneValid, passwordValid])

  const addNewUser = event => {
    event.preventDefault()

    const userDetail = {
      firstName,
      lastName,
      phoneNumber: String(phone),
      email,
      password,
      gender
    }

    axios
      .post('http://localhost:5000/api/User', {
        userDetail
      })
      .then(res => console.log(res))
  }

  return (
    <div className='users-container bg-slate-700 w-full '>
      <div className='users-form  py-10 w-full'>
        <form className='grid grid-cols-3 gap-2 '>
          <Input
            type='text'
            label='نام'
            name='firstname'
            placeholder='فلان X'
            admin={true}
            onValidation={(inputValue, isValid) => {
              setFirstName(inputValue)
              setFirstNameValid(isValid)
            }}
          />
          <Input
            type='text'
            label='نام خانوادگی'
            name='lastname'
            placeholder='فامیلی فلان X'
            admin={true}
            onValidation={(inputValue, isValid) => {
              setLastName(inputValue)
              setLastNameValid(isValid)
            }}
          />
          <Input
            type='email'
            label='ایمیل'
            name='email'
            placeholder='ایمیل فلان X'
            admin={true}
            onValidation={(inputValue, isValid) => {
              setEmail(inputValue)
              setEmailValid(isValid)
            }}
          />
          <Input
            type='number'
            label='شماره تماس'
            name='phoneNumber'
            placeholder='شماره فلان X'
            admin={true}
            onValidation={(inputValue, isValid) => {
              setPhoneValid(isValid)
              setPhone(inputValue)
            }}
          />
          <Input
            type='password'
            label='رمز عبور'
            name='password'
            placeholder='رمز فلان X'
            admin={true}
            onValidation={(inputValue, isValid) => {
              setPasswordValid(isValid)
              setPassword(inputValue)
            }}
          />
          <div className='select-gender mx-8 mt-8 text-lg text-white'>
            <label>جنسیت :</label>
            <select
              name='gender'
              required
              id='gender'
              className='text-black rounded-2xl px-3 py-1 mx-2'
              onChange={event => {
                setGender(event.target.value)
              }}
            >
              <option value='0'>مرد</option>
              <option value='1'>زن</option>
            </select>
          </div>

          <Button
            text='کاربر جدید +'
            type='submit'
            onSubmitForm={() => addNewUser(event)}
          />
        </form>
      </div>

      <div className='user-table text-white w-full border-t-2 border-gray-500 border-solid 	'>
        <table className='min-w-full border border-gray-300'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                نام
              </th>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                نام خانوادگی
              </th>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                ایمیل
              </th>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                شماره تماس
              </th>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                جنسیت
              </th>
              <th className='py-2 px-4 border-b-2 border-x-2 border-gray-400 border-solid'>
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                امیررضا{' '}
              </td>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                قربانی{' '}
              </td>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                amirghhastam@gmail.com{' '}
              </td>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                09036700972{' '}
              </td>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                مرد{' '}
              </td>
              <td className='py-2 px-14 border-b-2 border-x-2 border-gray-400 border-solid'>
                <button
                  className='bg-blue-500 text-white px-2 py-1 rounded'

                >
                  ویرایش
                </button>
                <button
                  className='bg-red-500 text-white px-2 py-1 rounded'

                >
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
