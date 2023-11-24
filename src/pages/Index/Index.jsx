import React from 'react'
import './Index.css'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import Category from '../../components/Category/Category'
import Banner from '../../components/Banner/Banner'

export default function Index () {
  return (
    <>
      <Navbar />
      <Landing />
      <Category />
      <Banner />
    </>
  )
}
