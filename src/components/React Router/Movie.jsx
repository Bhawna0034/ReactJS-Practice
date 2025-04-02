import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './UI/Card';

const Movie = () => {
  const movieData = useLoaderData();
  console.log(movieData);
  return (
    <ul className='flex flex-wrap items-center justify-center gap-8 p-8  '>
      {
        movieData && movieData.Search.map((currentMovie) => {
          return <Card key={currentMovie.imdbID} currentMovie={currentMovie} />
        })
      }
    </ul>
  )
}

export default Movie
