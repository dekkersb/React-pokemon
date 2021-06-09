import React, {useEffect, useState} from "react";
import axios from "axios";
import Buttons from "./Buttons";
import PokemonCard from "./PokemonCard";

function PokemonList () {
    const [pokemonList, setPokemonList] = useState();
console.log("Dit is de list before fetching:", pokemonList)

    useEffect(()=>{
        async function fetchPokemonList () {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
                )
                console.log("dit is de pokemon list:", response.data.results)
                setPokemonList(response.data.results);
            } catch {
                console.log("DIT WERKT NIET ERROR!!!")
            }
        }
        fetchPokemonList();

    }, []);

return (
    <div>
        {pokemonList ? (
            <div>
                {pokemonList.map((pokemon)=> {
                    return <PokemonCard nameOfPokemon={pokemon.name} />
                })}
            </div>
          ): (
        <h3>Loading...</h3>
        )
        }
    </div>
)
}

export default PokemonList;