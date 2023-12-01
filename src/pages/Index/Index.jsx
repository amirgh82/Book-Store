import React from 'react'
import './Index.css'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import Category from '../../components/Category/Category'
import Banner from '../../components/Banner/Banner'
import SalesSlider from '../../components/SalesSlider/SalesSlider'

export default function Index () {
  return (
    <>
      <Navbar />
      <Landing />
      <Category />
      <Banner />
      <SalesSlider componentTitle='پرفروش ترین کتاب ها' />
      <SalesSlider componentTitle='جدیدترین کتاب ها' />
    </>
  )
}
