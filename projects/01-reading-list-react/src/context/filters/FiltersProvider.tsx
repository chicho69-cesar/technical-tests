import { useState } from 'react'
import { FiltersContext } from '.'

export interface FiltersState {
  numberOfPages: number
  genre: string
}

export const INITIAL_FILTERS_STATE: FiltersState = {
  numberOfPages: 0,
  genre: 'all'
}

interface Props {
  children?: React.ReactNode | React.ReactNode[]
}

export const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<FiltersState>(INITIAL_FILTERS_STATE)

  const handleChangeGenre = (genre: string) => {
    setFilters({ ...filters, genre })
  }

  const handleChangeNumberOfPages = (numberOfPages: number) => {
    setFilters({ ...filters, numberOfPages })
  }

  return (
    <FiltersContext.Provider
      value={{
        genre: filters.genre,
        numberOfPages: filters.numberOfPages,
        changeGenre: handleChangeGenre,
        changeNumberOfPages: handleChangeNumberOfPages,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
