import React, { useEffect, useState } from "react";

const FetchPikachu = () => {
  const [apiData, setApiData] = useState(null);

  const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  function fetchData() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.error("Fetching error: ", error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (apiData === null) return <h2>Loading...</h2>;
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
                <img src = {"pokemon.sprites.other.dream_world.front_default"}
                     alt="pikachu"
                     className="w-[100px] object-contain"
                     />
            </figure>
            <h2 className="text-2xl font-bold">{apiData.name}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FetchPikachu;
