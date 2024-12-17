import {types} from "../types";

const initialState = {
    facts: [],
}
export const catFactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CAT_SUCCESS:
            return {
                ...state,
                facts: action.payload
            }
        default: return state;
    }
}