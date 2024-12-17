import {types} from "../types";


export const initialState = {
    pokemons: [],
}
export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state;
    }
}