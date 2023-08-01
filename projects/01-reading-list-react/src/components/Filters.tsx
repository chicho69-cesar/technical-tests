import './Filters.css'

import React, { useMemo, useContext } from 'react'
import { getGenres } from '../services/books'
import { FiltersContext } from '../context/filters'

export const Filters: React.FC = () => {
  const {
    numberOfPages,
    genre,
    changeNumberOfPages, 
    changeGenre,
  } = useContext(FiltersContext)

  const validGenres = useMemo(() => {
    return ['all', ...getGenres()]
  }, [])

  const handleChangeNOfPages: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    changeNumberOfPages(Number(e.target.value))
  }

  const handleChangeGenre: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeGenre(e.target.value)
  }

  return (
    <section className='filters'>
      <article className='filter'>
        <h4>Filtrar por páginas</h4>

        <div className='filter-group'>
          <input
            type='range'
            className='by-pages'
            min={0}
            max={1000}
            value={numberOfPages}
            onChange={handleChangeNOfPages}
          />

          <span className='pages-value'>{numberOfPages}</span>
        </div>
      </article>

      <article className='filter'>
        <h4>Filtrar por género</h4>

        <select onChange={handleChangeGenre} value={genre}>
          {validGenres.map((validGenre) => (
            <option 
              key={validGenre} 
              value={validGenre} 
            >
              {validGenre}
            </option>
          ))}
        </select>
      </article>
    </section>
  )
}
