import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: "mainSlice",
    initialState: {
        title: 'old title'
    },
    reducers: {
        mainInfo: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
        }
    }
})


export const {mainInfo,changeTitleWithParams} = mainSlice.actions;
export default mainSlice.reducer;