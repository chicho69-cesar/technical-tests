import { createContext } from 'react'
import type { Book } from '../../types'

interface BooksContextProps {
  lectureBooks: Book[]
  books: Book[]

  // Methods
  addToLectureBooks: (book: Book) => void
  removeFromLectureBooks: (book: Book) => void
}


export const BooksContext = createContext({} as BooksContextProps)
