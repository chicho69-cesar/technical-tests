import React, { useReducer } from 'react'

import { BooksContext, booksReducer } from '.'
import type { Book } from '../../types'
import { getInitialBooks, getLectureBooks } from '../../services/books'

export interface BooksState {
  lectureBooks: Book[]
  books: Book[]
}

const BOOKS_INITIAL_STATE: BooksState = {
  lectureBooks: getLectureBooks(),
  books: getInitialBooks(),
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export const BooksProvider: React.FC<Props> = ({ children }) => {
  const [{ books, lectureBooks }, dispatch] = useReducer(booksReducer, BOOKS_INITIAL_STATE)

  const handleAddToLectureBooks = (book: Book) => {
    dispatch({ type: 'ADD_TO_LECTURE_BOOKS', payload: book})
  }

  const handleRemoveFromLectureBooks = (book: Book) => {
    dispatch({ type: 'REMOVE_FROM_LECTURE_BOOKS', payload: book })
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        lectureBooks,

        // Methods
        addToLectureBooks: handleAddToLectureBooks,
        removeFromLectureBooks: handleRemoveFromLectureBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
