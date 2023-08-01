import './Library.css'

import React from 'react'

import type { Book as BookType } from '../types'
import { Book } from './Book'
import { LectureBook } from './LectureBook'
import { useBooks } from '../hooks/useBooks'

interface Props {
  books: BookType[]
  isReadingList?: boolean
}

export const Library: React.FC<Props> = ({ books, isReadingList = false }) => {
  const { removeFromLectureBooks } = useBooks()
  
  const className = isReadingList ? 'lecture-list' : 'books-list'
  
  return (
    <ul className={className}>
      {books.map((book) => {
        return isReadingList ? (
          <LectureBook 
            key={book.ISBN} 
            book={book} 
            removeFromLectureBooks={removeFromLectureBooks}
          />
        ) : (
          <Book 
            key={book.ISBN} 
            book={book} 
          />
        )
      })}
    </ul>
  )
}
