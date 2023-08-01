import { createContext } from 'react'

interface FiltersContextProps {
  numberOfPages: number
  genre: string

  // Methods
  changeNumberOfPages: (numberOfPages: number) => void
  changeGenre: (genre: string) => void
}

export const FiltersContext = createContext<FiltersContextProps>({} as FiltersContextProps)
