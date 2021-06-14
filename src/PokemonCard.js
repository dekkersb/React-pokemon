import React, {useEffect, useState} from "react";
import axios from "axios";
import "./PokemonCard.css";


function PokemonCard (props) {
    const [pokemons, setPokemons] = useState(null);


    useEffect(()=>{
        async function fetchPokemon () {
            try {
                const response = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`
                )
                setPokemons(response.data)
            } catch {
                console.log("DIT WERKT NIET ERROR!!!")
            }
        }
            fetchPokemon();

    }, [pokemons]);


    return (
        <div className="PokemonCard">
            {pokemons ? (
                <div className="PokemonDetails">
                    <h1>{pokemons.name}</h1>
                    <img src={pokemons.sprites.other.dream_world.front_default}/>
                    <br/>
                    <div>
                        Moves: {pokemons.moves.length}
                    </div>
                    <br/>
                    <div>
                        Weight: {pokemons.weight}
                    </div>
                    <br/>
                    <div>
                        Abilities: {pokemons.abilities.map((ability)=>{
return  <ul>{ability.ability.name}</ul>
                        })}
                    </div>
                </div>
            ) : (
                <h3> Loading... </h3>
            )
            }
        </div>
    )
}

export default PokemonCard;