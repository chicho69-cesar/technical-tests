import { useContext, useEffect } from 'react'

import { BooksContext } from '../context/books'
import { FiltersContext } from '../context/filters'
import { setLectureBooks } from '../services/books'

export function useBooks () {
  const { books, lectureBooks, addToLectureBooks, removeFromLectureBooks } = useContext(BooksContext)
  const { genre, numberOfPages } = useContext(FiltersContext)

  const filteredBooks = books.filter((book) => {
    if (genre === 'all' && book.pages >= numberOfPages) {
      return true
    }

    if (genre === book.genre && book.pages >= numberOfPages) {
      return true
    }

    return false
  })

  useEffect(() => {
    setLectureBooks(lectureBooks)
  }, [lectureBooks])
  

  return {
    books: filteredBooks,
    lectureBooks,
    addToLectureBooks,
    removeFromLectureBooks,
  }
}
