import React, { useEffect, useState } from "react";

const FetchPikachu = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setApiData(data)})
     
      .catch((error) => {
        setLoading(false);
        setError(error)
        console.error("Fetching error: ", error)});
  }, []);

  if(loading) return <h2 className="text-5xl font-bold">Loading...</h2>
  if(error) return <h2 className="text-xs text-red-600">{error.message}</h2>
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">Pokemon Card</h2>
      <div
        className="bg-white p-6 rounded-md"
        style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
      >
        <ul>
          <li>
            <figure>
                <img src = {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
                     alt="pikachu"
                     className="w-[100px] object-contain"
                     />
            </figure>
            <h2 className="text-2xl font-bold">{apiData ? apiData.name : "Unknown"}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FetchPikachu;
