import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState(null);
    console.log("wat is de pokemon?", pokemon)


    useEffect(()=>{
    async function fetchPokemon () {
        const response = await axios.get (
            `https://pokeapi.co/api/v2/pokemon/jigglypuff`
        )
        console.log("dit is de pokemon naam:", response.data.name)
        setPokemon(response.data.name)
    }
    fetchPokemon();
    }, []);


  return (
    <div>
      Begin hier met de opdracht!

    </div>
  );
}

export default App;
