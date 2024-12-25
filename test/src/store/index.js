import {configureStore} from "@reduxjs/toolkit";
import pokemonsReducer from "./pokemonSlice";

export const store = configureStore({
    reducer: {
        pokemonsReducer,
    },

})