import {types} from "../types";

const initialState = {
    chars: []
}
export const harryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_HARRY_SUCCESS:
            return {
                ...state,
                chars: action.payload
            }
        default: return state
    }
}