import React from 'react'
import './SalesSlider.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'

export default function SalesSlider ({ componentTitle }) {
  return (
    <div className='container sliders h-auto mt-8'>
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
        className='mySwiper h-full mt-6'
      >
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to='/'
            class='card-book relative flex w-full flex-col rounded-x bg-slate-800 bg-clip-border text-white shadow-md h-full rounded-2xl'
          >
            <div class='relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-white'>
              <img
                src='/src/assets/images/effect.jpg'
                alt=''
                className=' w-full'
              />
            </div>
            <div class='p-6'>
              <h5 class='mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                اثر مرکب
              </h5>
              <p class='block text-base font-light leading-relaxed text-inherit antialiased'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است
              </p>
            </div>
            <div class='p-6 pt-0'>
              <button
                data-ripple-light='true'
                type='button'
                class='select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xl font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              >
                مشاهده کتاب
              </button>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
