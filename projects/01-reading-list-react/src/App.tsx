import { Filters } from './components/Filters.tsx'
import { Library } from './components/Library.tsx'
import { useBooks } from './hooks/useBooks.ts'

function App() {
  const { books, lectureBooks } = useBooks()

  const nOfAvailableBooks = books.length
  const nOfLectureBooks = lectureBooks.length

  return (
    <>
      <h1>Librería</h1>

      <main>
        <section className='available-books'>
          <h2>
            Libros disponibles: 
            <span className='available-books-number'>{nOfAvailableBooks}</span>
          </h2>

          <h3>{nOfLectureBooks} en lista de lectura</h3>

          <Filters />

          <Library books={books} />
        </section>

        <section className='lecture-books'>
          <h2 className='lecture-books-title'>Lista de Lectura</h2>

          <Library books={lectureBooks} isReadingList />
        </section>
      </main>
    </>
  )
}

export default App
