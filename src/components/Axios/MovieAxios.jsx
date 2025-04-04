import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardAxios from './CardAxios';
import { getMovie } from '../services/GetService';

const MovieAxios = () => {
    const [data, setData] = useState([]);
    // const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=harry+potter&page=1`;
    const getMovieDataAxios = async() => {
        try{
           const response = await getMovie();
        //    console.log(response.data.Search);
        setData(response.data.Search || []);

        }catch(error){
            console.log("Error message: ", error.message);
            console.log("Error status: ", error.response.status);
            console.log("Error data: ", error.response.data);
        }
    }

    useEffect(() => {
        getMovieDataAxios();
    }, []);
  return (
    <div>
      {/* Hello Movie Axios */}
      <ul className='flex flex-wrap items-center justify-center gap-8 p-8'>
      {
        data.map((currentMovie) => {
            return <CardAxios key={currentMovie.imdbID} currentMovie={currentMovie} />
        })
      }
      </ul>
    </div>
  )
}

export default MovieAxios
