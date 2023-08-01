import './index.css'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BooksProvider } from './context/books/index.ts'
import { FiltersProvider } from './context/filters/index.ts'

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement)

root.render(
  <FiltersProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </FiltersProvider>
)
