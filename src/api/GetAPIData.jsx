import React from 'react'

const getMovieData = async() => {
  const API_KEY = import.meta.env.VITE_API_KEY;

    try{
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=harry+potter&page=1`);
        const data = await response.json();
        return data;
      


    }catch(error){
        console.log(error);
    }
  return (
    <div>
      
    </div>
  )
}

export default getMovieData;
