"use client";
import Link from "next/link";
import React, {JSXElementConstructor} from "react";
import "./../globals.css";
import "./poke-grid.css";

interface Pokemon{
    name: string;
    url: string;
    

}
interface PokemonList{
    count: number;
    next: string;
    previous?: any;
    results: Pokemon[];

}


export default function Page() {
    const [pokemonData , setPokemonData] = React.useState<PokemonList>({} as PokemonList);
    const [allPokemon, setAllPokemon] = React.useState<Pokemon[]>([]);
    const [loading , setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const getData = async () => {
            const result = await fetch("https://pokeapi.co/api/v2/pokemon")
                .then((res) => res.json())
                .then((res) => {
                    // console.log("name" + res.name);
                    const pokemonData: PokemonList = res as PokemonList;
                    setPokemonData(pokemonData);
                    setAllPokemon(pokemonData.results);
                })
                .catch((err) => console.error(err));
        };
        getData();
    },[]);

    const loadMorePokemon = async () => {
        if (pokemonData.next) {
            setLoading(true);
            const result = await fetch(pokemonData.next)
            .then((res) => res.json())
            .then((res) => {
                const newPokemonData: PokemonList = res as PokemonList;
                setPokemonData(newPokemonData);
                setAllPokemon((prev) => [...prev, ...newPokemonData.results]);
            })
            .catch((err) => console.error(err));
            setLoading(false);
        }
    }

    const DisplayPokemonList = () => {
        if (allPokemon.length > 0)
            return (
            <div>
                <ul className="pokemon-grid">
                    {allPokemon.map((poke, index) => (
                        <li key={index} className="pokemon-item">
                            <Link href={"/pokemon/"+ poke.name}>{poke.name.toUpperCase()}</Link>
                        </li>
                    ))}
                </ul>
                {pokemonData.next && 
                    <button onClick={loadMorePokemon} className="load-more">{"Load More"}</button>}
                </div>
            );
            else return <p>Loading...</p>
    };

    return (
        <>
        <h1>Pokemon</h1>
        <DisplayPokemonList />
        </>
    );
}