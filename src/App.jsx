import { useState } from 'react'
import './components/button'; 
import {MovieCard} from './components/MovieCard'




// import './App.css'
// import MyButton from './components/button';

function App() {
  const [count, setCount] = useState(0)

  return (
   <MovieCard/> 
  )
}

export default App
