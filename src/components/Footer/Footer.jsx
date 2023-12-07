import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
export default function Footer () {
  return (
    <footer className='footer mt-11 bg-slate-900 w-full text-white'>
      <div className='container flex justify-between flex-wrap text-right py-7'>
        <div className='footer-access'>
          <h6 className='footer-title mb-5'>دسترسی سریع</h6>
          <ul className='footer-access-lists'>
            <li className='footer-access-list py-1'>
              <Link
                to='/'
                className='footer-access-link hover:text-cyan-500 transition-colors delay-100'
              >
                صفحه اصلی
              </Link>
            </li>
            <li className='footer-access-list py-1'>
              <Link
                to='/'
                className='footer-access-link hover:text-cyan-500 transition-colors delay-100'
              >
                دسته بندی ها
              </Link>
            </li>
            <li className='footer-access-list py-1'>
              <Link
                to='/login'
                className='footer-access-link hover:text-cyan-500 transition-colors delay-100'
              >
                ثبت نام / ورود
              </Link>
            </li>
            <li className='footer-access-list py-1'>
              <Link
                to='/'
                className='footer-access-link hover:text-cyan-500 transition-colors delay-100'
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer-about w-5/12 max-[768px]:w-full max-[768px]:py-4'>
          <h6 className='footer-title mb-5'>درباره ما</h6>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>

        <div className='footer-contact'>
          <h6 className='footer-title mb-5'>تماس با ما</h6>
          <p>تهران - سعادت آباد </p>
        </div>
      </div>
    </footer>
  )
}
