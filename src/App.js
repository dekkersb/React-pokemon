import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./PokemonCard";
import PokemonList from "./PokemonList";

function App() {
    return (
        <div>
            <PokemonList/>
        </div>
    )
};


export default App;
