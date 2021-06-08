import React, {useEffect, useState} from "react";
import axios from "axios";


function PokemonCard (props) {
    const [pokemons, setPokemons] = useState(null);
    console.log("wat is de pokemon?", pokemons)


    useEffect(()=>{
        async function fetchPokemon () {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`
                )
                console.log("dit is de pokemon naam:", response.data)
                setPokemons(response.data)
            } catch {
                console.log("DIT WERKT NIET ERROR!!!")
            }
        }
        fetchPokemon();

    }, []);


    return (
        <div>
            {pokemons ? (
                <div>
                    <h1>{pokemons.name}</h1>
                    <img src={pokemons.sprites.other.dream_world.front_default}/>
                </div>
            ) : (
                <h3> Loading... </h3>
            )
            }
        </div>
    )
}

export default PokemonCard;