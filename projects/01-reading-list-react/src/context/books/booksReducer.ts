import { type BooksState } from '.'
import type { Book} from '../../types';

type BooksActionType =
  | { type: 'ADD_TO_LECTURE_BOOKS', payload: Book}
  | { type: 'REMOVE_FROM_LECTURE_BOOKS', payload: Book}

export function booksReducer (state: BooksState, action: BooksActionType): BooksState {
  const { type } = action

  switch (type) {
    case 'ADD_TO_LECTURE_BOOKS': {
      const { payload: book } = action

      const newLectureBooks = [...state.lectureBooks, book]
      const newBooks = state.books.filter((availableBook) => (availableBook).ISBN !== book.ISBN)

      return {
        ...state,
        lectureBooks: newLectureBooks,
        books: newBooks,
      }
    }

    case 'REMOVE_FROM_LECTURE_BOOKS': {
      const { payload: book } = action

      const newLectureBooks = state.lectureBooks.filter((lectureBook) => lectureBook.ISBN !== book.ISBN)
      const newBooks = [...state.books, book]

      return {
        ...state,
        lectureBooks: newLectureBooks,
        books: newBooks,
      }
    }

    default: 
      return state
  }
}
