import React, { useState } from 'react'
import './Input.css'
import regex from '../../../regex'
export default function ({
  label,
  type,
  name,
  placeholder,
  onValidation,
  admin,
  value
}) {
  const [inputValue, setInputValue] = useState('')

  const inputValidation = event => {
    let inputValue = event.target.value.trim()
    setInputValue(inputValue)

    let isValid
    if (type === 'text') {
      isValid = true
    }
    if (type === 'number') {
      isValid = regex.testPhone(inputValue)
    }
    if (type === 'password') {
      isValid = regex.testPassword(inputValue)
    }
    if (type === 'email') {
      isValid = regex.testEmail(inputValue)
    }

    onValidation(inputValue, isValid)
  }

  return (
    <>
      <div
        className={`input-container flex flex-col w-auto ${
          admin ? 'mx-8' : 'mx-0'
        }  text-white max-[600px]:w-full`}
      >
        <label className='mb-1 mt-6 text-lg'>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className='text-slate-700 p-2 placeholder:text-sm placeholder:text-slate-700 placeholder:px-2 border-none outline-white'
          required
          onChange={() => inputValidation(event)}
          value={inputValue}
        />
      </div>
    </>
  )
}
