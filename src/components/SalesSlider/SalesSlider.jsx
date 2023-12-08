import React from 'react'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import './SalesSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import Book from '../Book/Book'

export default function SalesSlider ({ componentTitle }) {
  return (
    <>
      <div className='container sliders h-auto my-8'>
        <ComponentTitle title={componentTitle} />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
          modules={[Pagination]}
          className='mySwiper h-fit mt-6'
        >
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
          <SwiperSlide className='bg-slate-800 rounded-2xl h-5/6'>
            <Book />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
