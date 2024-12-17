import {combineReducers} from "redux";
import {pokemonsReducer} from "./pokemonsReducer";
import {harryReducer} from "./harryReducer";
import {catFactReducer} from "./catFactReducer";
import {quotesReducer} from "./quotesReducer";
import {postReducer} from "./postReducer";


export const rootReducer = combineReducers({
        pokemonsReducer,
        harryReducer,
        catFactReducer,
        quotesReducer,
        postReducer,
    }
)
