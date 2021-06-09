import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

function PokemonList () {
    const [pokemonList, setPokemonList] = useState([]);
    const [offSet, setOffset] = useState(0);

function offSetAdd () {
    setOffset(offSet + 20);
}
function offSetMin () {
    setOffset(offSet - 20);
}

    useEffect(()=>{
        async function fetchPokemonList () {
            try {
                const response = await axios.get(

                    `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`
                )
                setPokemonList(response.data.results);
            } catch {
                console.log("DIT WERKT NIET ERROR!!!")
            }
        }
            fetchPokemonList();

    }, [offSet]);

return (
    <div>
        <button
            type="button"
            disabled={offSet <=19}
            onClick={offSetMin}
        >
            Vorige
        </button>

        <button
            type="button"
            disabled={offSet >=1100}
            onClick={offSetAdd}
        >
            Volgende
        </button>
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
        <button
            type="button"
            disabled={offSet <=19}
            onClick={offSetMin}
        >
            Vorige
        </button>

        <button
            type="button"
            disabled={offSet >=1100}
            onClick={offSetAdd}
        >
            Volgende
        </button>
    </div>
)
}

export default PokemonList;