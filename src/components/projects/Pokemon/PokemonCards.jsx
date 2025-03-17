import React from "react";

const PokemonCards = ({pokemonData}) => {
    
  return (
    <div>
      <li
        key={pokemonData.id}
        className="bg-white px-8 py-4 space-y-4 text-center flex flex-col items-center w-[400px] h-[400px]"
        style={{ boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px` }}
      >
        <figure className="min-h-[100px]">
            <img src={pokemonData.sprites.other.dream_world.front_default} 
                 alt={pokemonData.name}
                 width={100}
                 height={100}
                 
                 className="w-[100px] max-h-[100px]object-contain"
                 />
        </figure>
        <h2 className="text-2xl font-bold mt-2">{pokemonData.name}</h2>
        <p className="bg-green-600 text-white font-semibold rounded-full px-4 py-2 whitespace-nowrap">
          {pokemonData.types.map((currentType) => currentType.type.name).join(", ")}
        </p>
        <ul className="grid grid-cols-3 gap-2 w-full">
          <li className="text-md font-bold">
            Height: <span className="font-normal">{pokemonData.height}</span>
          </li>
          <li className="text-md font-bold">
            Weight: <span className="font-normal">{pokemonData.weight}</span>
          </li>
          <li className="text-md font-bold">
            Speed: <span className="font-normal">{pokemonData.stats[5].base_stat}</span>
          </li>
        </ul>
        <ul className="grid grid-cols-3 gap-2 w-full">
          <li className="flex flex-col font-normal">
            {pokemonData.base_experience}
            <span className="text-md font-bold">Experience</span>
          </li>
          <li className="flex flex-col font-normal">
            {pokemonData.stats[1].base_stat}
            <span className="text-md font-bold">Attack</span>
          </li>
          <li className="flex flex-col font-normal">
            {pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0,1).join(", ")}
            <span className="text-md font-bold">Abilities</span>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default PokemonCards;
