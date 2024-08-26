"use client";
import { useParams  } from "next/navigation";
import React, { useState , useEffect} from "react";
import "./../../globals.css";
import "./poke.css"
import Image from "next/image";
import  "bootstrap/dist/css/bootstrap.min.css"
import EmojiComponent from "../emoji";

interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  sprites: {
    front_default: string;
  };
  stats: Array<{
    base_stat: number;
    stat: { name: string };
  }>;
}

export default function Page() {
  const {name} = useParams<{name: string}>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemonDetails) {
    return <p>Loading...</p>;
  }


  return (
    <div className="pokemon-container">
      <div className="pokemon">
        <h1>{pokemonDetails.name.toUpperCase()}</h1>
        <div className="pokemon-image">
      <Image 
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
          width={300}
          height={300}
        />
      </div>
      </div>
      
      <div className="pokemon-details">
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <p>Base Experience: {pokemonDetails.base_experience}</p>

        <h2>Types</h2>
        <ul>
          {pokemonDetails.types.map((type) => (
            <li key={type.type.name}><EmojiComponent text={type.type.name}/>{type.type.name.toUpperCase()}</li>
          ))}
        </ul>

        <h2>Abilities</h2>
        <ul>
          {pokemonDetails.abilities.map((ability) => (
            <li key={ability.ability.name}>- {ability.ability.name.toUpperCase()}</li>
          ))}
        </ul>

        <h2>Stats</h2>
        <ul>
          {pokemonDetails.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name.toUpperCase()} {<EmojiComponent text={stat.stat.name}/>} : {stat.base_stat} 
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}