import React from 'react'
import './Landing.css'
import Typewriter from 'typewriter-effect'
import { FaSearch } from 'react-icons/fa'

export default function Landing () {
  return (
    <div className='landing w-full text-white flex justify-center items-center flex-col'>
      <div className='content-text flex justify-center items-center flex-col  p-10 rounded-3xl mx-4'>
        <h2 className='content-title mb-5 text-5xl max-[786px]:text-3xl max-[525px]:text-2xl '>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .pauseFor(10)
                .typeString('باندلس بوک بزرگ ترین فروشگاه کتاب های جنایی')
                .start()
            }}
          />
        </h2>
        <p className='content-desc text-3xl  max-[786px]:text-sm'>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .pauseFor(10)
                .typeString(
                  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
                )
                .start()
            }}
          />
        </p>
      </div>
      <div className='content-input mt-24 relative flex items-center w-4/12 max-[800px]:w-10/12'>
        <input
          type='text'
          name=''
          id=''
          placeholder='دنبال چی می گردی؟'
          className=' border-none text-slate-800 outline-cyan-800 w-full rounded-2xl p-2 placeholder:text-slate-800'
        />
        <button className=' text-slate-900 absolute left-0 px-2 text-2xl'>
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
