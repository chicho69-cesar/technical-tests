import './Book.css'

import React from 'react'

import type { Book as BookType } from '../types'
import { useBooks } from '../hooks/useBooks'

interface Props {
  book: BookType
}

export const Book: React.FC<Props> = ({ book }) => {
  const { addToLectureBooks } = useBooks()

  return (
    <li className='book'>
      <img
        src={book.cover}
        alt={book.title}
      />
      
      <div className='book-info'>
        <h4>{book.title}</h4>
        <p>{book.synopsis}</p>

        <span className='book-genre'>{book.genre}</span>
        
        <p>Publicado en: <strong>{book.year}</strong></p>
        <p>Mas leídos de <strong>{book.author.name}</strong>:</p>

        <ul className='author-books'>
          {book.author.otherBooks.length > 0 ? (book.author.otherBooks.slice(0, 2).map((otherBook) => (
            <li key={otherBook}>{otherBook}</li>
          ))) : (
            <li>No hay otros libros de este autor aquí...</li>
          )}
        </ul>

        <div className='book-actions'>
          <button onClick={() => addToLectureBooks(book)}>
            Agregar a la lista
          </button>
        </div>
      </div>
    </li>
  )
}
