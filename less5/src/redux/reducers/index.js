import {combineReducers} from "redux";
import {charactersReducer} from "./CharactersReducers";
import {catReducer} from "./catReducer";

export const rootReducer = combineReducers({
    charactersReducer,
    catReducer,
})