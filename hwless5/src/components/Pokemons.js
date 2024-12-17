import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {fetchPokemon} from "../redux/actions";

const Pokemons = () => {
    const pokemons = useSelector((state) => state.pokemonsReducer.pokemons);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Pokemons</h2>
            <Button variant="primary" onClick={() => dispatch(fetchPokemon())}>Get Pokemons</Button>
            {pokemons.map((pokemon) => (<p key={pokemon.url}>{pokemon.name}</p>))}
        </div>
    );
};

export default Pokemons;