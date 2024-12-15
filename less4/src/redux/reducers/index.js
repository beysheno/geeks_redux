import {combineReducers} from "redux";
import {charactersReducer} from "./CharactersReducers";

export const rootReducer = combineReducers({
    charactersReducer,
})