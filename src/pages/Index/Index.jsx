import React from 'react'
import './Index.css'
import Navbar from '../../components/Navbar/Navbar'
import Landing from '../../components/Landing/Landing'
import Category from '../../components/Category/Category'

export default function Index () {
  return (
    <>
      <Navbar />
      <Landing />
      <Category />
    </>
  )
}
