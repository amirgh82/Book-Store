import React from 'react'
import './Index.css'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import Category from '../../components/Category/Category'
import Banner from '../../components/Banner/Banner'
import SalesSlider from '../../components/SalesSlider/SalesSlider'
import Footer from '../../components/Footer/Footer'
import NewBook from '../../components/NewBook/NewBook'

export default function Index () {
  return (
    <>
      <Navbar />
      <Landing />
      <Category />
      <Banner />
      <NewBook />
      <SalesSlider componentTitle='پرفروش ترین کتاب ها' />
      <Footer />
    </>
  )
}
