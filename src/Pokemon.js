import React from "react";
import './Pokemon.css'

const Pokemon = (props) => {
    const {id, name, type, base_experience} = props
    let IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="pokemon-card">
            <h2 className="pokemon-name">{name}</h2>
            <img src={IMAGE} className="pokemon-img" alt={name}></img>
            <ul className="pokemon-data">
                <li>Type: {type}</li> 
                <li>EXP: {base_experience}</li>
            </ul>
        </div>
    );
}

export default Pokemon;