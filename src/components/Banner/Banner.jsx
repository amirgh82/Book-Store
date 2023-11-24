import React from 'react'
import './Banner.css'
export default function Banner () {
  return (
    <div className='container banner w-full mx-auto'>
      <img
        src='/src/assets/images/banner.jpg'
        alt='banner'
        className='banner-img w-full rounded-2xl h-40'
      />
    </div>
  )
}
