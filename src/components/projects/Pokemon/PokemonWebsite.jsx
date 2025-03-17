import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const PokemonWebsite = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      console.log(data);

      const detailedPokemon = data.results.map(async (currentPokemon) => {
        const response = await fetch(currentPokemon.url);
        const data = await response.json();
        return data;
      });
      // console.log(detailedPokemon);
      const detailedResponses = await Promise.all(detailedPokemon);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  // search functionality
  const searchData = pokemon.filter((currentPokemon) => 
    currentPokemon.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if(error){
    return(
        <div>
            <h2 className="text-red-600">{error.message}</h2>
        </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Let's Catch Pokemon</h2>
      <input
        type="text"
        placeholder="Search Pokemon"
        className="bg-white border border-gray-100 p-2 mb-8"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul className="grid  grid-cols-1 lg:grid-cols-3 gap-8">
        {searchData.map((currentPokemon) => {
          return (
            <PokemonCards
              key={currentPokemon.id}
              pokemonData={currentPokemon}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonWebsite;
