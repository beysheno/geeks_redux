import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPokemons = createAsyncThunk(
    "getPokemons",
    async function (_,{dispatch}){
        try{
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            const data = response.data;
            dispatch(getPokemons(data.results))
        } catch (error) {
            console.log(error)
        }
    }
    )

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        pokemons: [],

    },
    reducers: {
        getPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
    }

})
export const {getPokemons} = pokemonSlice.actions;
export default pokemonSlice.reducer;