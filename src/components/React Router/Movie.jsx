import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './UI/Card';

const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <ul className='grid grid-cols-3 gap-4 p-4  '>
      {
        movieData && movieData.Search.map((currentMovie) => {
          return <Card key={currentMovie.imdbID} currentMovie={currentMovie} />
        })
      }
    </ul>
  )
}

export default Movie
