import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./PokemonCard";

function App() {
    return (
        <div>
            <PokemonCard nameOfPokemon="drowzee"/>
            <PokemonCard nameOfPokemon="pikachu"/>
            <PokemonCard nameOfPokemon="diglett"/>
            <PokemonCard nameOfPokemon="raichu"/>
            <PokemonCard nameOfPokemon="geodude"/>
            <PokemonCard nameOfPokemon="mew"/>
            <PokemonCard nameOfPokemon="squirtle"/>
        </div>
    )
};


export default App;
