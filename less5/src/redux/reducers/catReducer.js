import {types} from "../types";

const initialState = {
    catImage: '',
    joke: '',
}


export const catReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case types.FETCH_CAT_SUCCESS:
            return {
                ...state, catImage: action.payload
            }
        case types.FETCH_JOKES_SUCCESS:
            return {
                ...state, joke: action.payload
            }
        default :
            return state
    }
}