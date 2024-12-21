import {configureStore} from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";
import counterSlice from "./counterSlice";

export const store = configureStore({
    reducer: {
        mainSlice,
        counterSlice,
    },

})