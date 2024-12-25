import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchPokemons} from "../../store/pokemonSlice";
import PokemonsCard from "../../components/pokemonCard/PokemonsCard";

const PokemonsPage = () => {
    const pokemons = useSelector(state => state.pokemonsReducer.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);
    return (
        <div className="pokemons-page">
            <h1>Pokemons List</h1>
            {
                pokemons && pokemons.map((pokemon) => (<PokemonsCard pokemon={pokemon} key={pokemon.id} />))
            }
        </div>
    );
};

export default PokemonsPage;