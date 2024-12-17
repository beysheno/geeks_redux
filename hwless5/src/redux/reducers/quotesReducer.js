import {types} from "../types";

const initialState = {
    quotes: [],
}
export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_QUOTES_SUCCESS:
            return {
                ...state,
                quotes: action.payload
            }
        default: return state;
    }
}