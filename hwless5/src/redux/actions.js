import axios from "axios";
import {types} from "./types";


export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: types.FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemon = () => async (dispatch) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemon = response.data.results;
        dispatch(fetchPokemonSuccess(pokemon));
    } catch (error) {
        console.error('Failed to fetch pokemon:', error);
    }
}
export const fetchHarrySuccess = (chars) => {
    return {
        type: types.FETCH_HARRY_SUCCESS,
        payload: chars
    }
}

export const fetchHarry = () => async (dispatch) => {
    try {
        const response = await axios.get('https://hp-api.onrender.com/api/characters/students')
        dispatch(fetchHarrySuccess(response.data))
    }catch(error) {
        console.error('Failed to fetch harry:', error);
    }
}
export const fetchCatSuccess = (quotes) => {
    return {
        type: types.FETCH_CAT_SUCCESS,
        payload: quotes
    }
}
export const fetchCat = () => async (dispatch) => {
    try{
        const response = await axios.get('https://catfact.ninja/fact');
        dispatch(fetchCatSuccess(response.data));
    }catch(error) {
        console.error('Failed to fetch anime:', error);
    }
}

export const fetchQuoteSuccess = (quote) => {
    return {
        type: types.FETCH_QUOTES_SUCCESS,
        payload: quote
    }
}

export const fetchQuote = () => async (dispatch) => {
    try{
        const response = await axios.get('https://dummyjson.com/quotes/1');
        dispatch(fetchQuoteSuccess(response.data));
    } catch (error){
        console.error('Failed to fetch quote:', error);
    }
}

export const fetchPostSuccess = (post) => {
    return {
        type: types.FETCH_POSTS_SUCCESS,
        payload: post

    }
}
export const fetchPost = () => async (dispatch) => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchPostSuccess(response.data));
    } catch (error) {
        console.error('Failed to fetch post:', error);
    }
}