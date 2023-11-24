import React from 'react'
import './Category.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function Category () {
  return (
    <div className='container category my-8 text-center mx-auto'>
      <ComponentTitle title='دسته بندی کتاب ها' />
      <div className='categories grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto mx-auto w-full'>
        <CategoryCard categoryName='جنایی' />
        <CategoryCard categoryName='معامایی' />
        <CategoryCard categoryName='تاریخی' />
        <CategoryCard categoryName='فلسفی' />
        <CategoryCard categoryName='توسعه فردی' />
        <CategoryCard categoryName='کسب و کار' />
      </div>
    </div>
  )
}
