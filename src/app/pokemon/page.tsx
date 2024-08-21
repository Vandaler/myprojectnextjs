"use client";
import Link from "next/link";
import React, {JSXElementConstructor} from "react";

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
    React.useEffect(() => {
        const getData = async () => {
            const result = await fetch("https://pokeapi.co/api/v2/pokemon")
                .then((res) => res.json())
                .then((res) => {
                    // console.log("name" + res.name);
                    const pokemonData: PokemonList = res as PokemonList;
                    setPokemonData(pokemonData);
                })
                .catch((err) => console.error(err));
        };
        getData();
    },[])

    const DisplayPokemonList = () => {
        if (pokemonData && pokemonData.results)
            return (
                <ul>
                    {pokemonData.results.map((poke, index) => (
                        <Link key={index} href={'/pokemon/'+ poke.name}>{poke.name}<br/></Link>
                    ))}
                </ul>
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