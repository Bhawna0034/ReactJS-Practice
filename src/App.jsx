import { useState } from 'react'
import { InterstellarCard} from './components/MovieCard'
import { MovieCards } from './components/MovieCards'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieCards />
  )
}

export default App
