import {createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.counter += action.payload;
        },
        decrement: (state, action) => {
            state.counter <= 0 && -10 ? state.counter = 0  :  state.counter -= action.payload;
        },
        reset: (state, action) => {
            state.counter = 0;
        }

    }

})
export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;

