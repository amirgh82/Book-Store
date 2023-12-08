import React from 'react'
import './Category.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import CategoryCard from '../CategoryCard/CategoryCard'

export default function Category () {
  return (
    <div className='container category my-8 text-center mx-auto'>
      <ComponentTitle title='دسته بندی کتاب ها' />
      <div className='categories grid max-[400px]:grid-cols-1 max-[640px]:grid-cols-2 max-[640px]:gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5 auto-rows-auto mx-auto w-full'>
        <CategoryCard categoryName='جنایی' />
        <CategoryCard categoryName='معامایی' />
        <CategoryCard categoryName='تاریخی' />
        <CategoryCard categoryName='فلسفی' />
        <CategoryCard categoryName='توسعه فردی' />
        <CategoryCard categoryName='کسب و کار' />
        <CategoryCard categoryName='کسب و کار' />
        <CategoryCard categoryName='کسب و کار' />
        <CategoryCard categoryName='کسب و کار' />
        <CategoryCard categoryName='کسب و کار' />
      </div>
    </div>
  )
}
