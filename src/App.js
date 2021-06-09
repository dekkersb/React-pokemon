import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./PokemonCard";

function App() {
    return (
        <div>
            <PokemonCard nameOfPokemon="jigglypuff"/>

        </div>
    )
};


export default App;
