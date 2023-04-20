import React from 'react';
import Pokedex from './Pokedex.js';
import PokemonArr from './PokemonArr';

function App() {
  return (
    <div>
      <Pokedex pokemonArr={PokemonArr}/>
    </div>
  );
}

export default App;
