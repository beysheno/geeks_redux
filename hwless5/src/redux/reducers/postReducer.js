import {types} from "../types";

const initialState = {
    posts: [],
}
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        default: return state;
    }
}