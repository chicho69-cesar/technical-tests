import './LectureBook.css'

import React from 'react'
import type { Book } from '../types'

interface Props {
  book: Book
  removeFromLectureBooks: (book: Book) => void
}

export const LectureBook: React.FC<Props> = ({ book, removeFromLectureBooks }) => {
  return (
    <article className='lecture-book'>
      <img
        src={book.cover}
        alt={book.title}
      />

      <h4>{book.title}</h4>

      <button onClick={() => {
        removeFromLectureBooks(book)
      }}>❌</button>
    </article>
  )
}
