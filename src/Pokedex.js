import React from 'react';
import Pokemon from './Pokemon.js';
import './Pokedex.css';

const Pokedex = (props) => {
    const PokemonArr = props.pokemonArr
    return (
        <div className='pokedex'>
            <h1 className='pokedex-title'>Pokedex</h1>
            {PokemonArr.map((i) => (
                <Pokemon 
                    key={i.id}
                    id={i.id} 
                    name={i.name} 
                    type={i.type} 
                    base_experience={i.base_experience}
                />
            ))}
        </div>
    )
}

export default Pokedex;