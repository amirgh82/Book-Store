import React from 'react'
import './NewBook.css'
import ComponentTitle from '../ComponentTitle/ComponentTitle'
import Book from '../Book/Book'
export default function NewBook () {
  return (
    <div className='new-book container my-8'>
      <ComponentTitle title='جدید ترین کتاب ها' />
      <div className='new-book-section grid max-[400px]:grid-cols-1 max-[640px]:grid-cols-2 max-[640px]:gap-3 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-10 lg:grid-cols-4 xl:grid-cols-5 auto-rows-auto mx-auto w-full my-8'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  )
}
