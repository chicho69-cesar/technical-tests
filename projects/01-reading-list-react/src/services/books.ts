import booksMocks from '../assets/books.json'
import { Book } from '../types'

export function getInitialBooks (): Book[] {
  const lectureBooks: Book[] = getLectureBooks()

  const mockedBooks = booksMocks.library.filter(({ book }) => {
    if (lectureBooks.some(({ ISBN }) => ISBN === book.ISBN)) {
      return false
    }

    return true
  })

  return mockedBooks.map(({ book }) => book)
}

export const getLectureBooks = (): Book[] => {
  const localStorageBooks = localStorage.getItem('books')

  return localStorageBooks 
    ? JSON.parse(localStorageBooks)
    : []
}

export const setLectureBooks = (books: Book[]): void => {
  localStorage.setItem('books', JSON.stringify(books))
}

export function getGenres (): string[] {
  return [...new Set(booksMocks.library.map(({ book }) => book.genre))]
}
