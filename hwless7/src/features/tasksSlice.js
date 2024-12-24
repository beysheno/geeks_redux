
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  },
});
export const { addTask, removeTask } = tasksSlice.actions; 
export default tasksSlice.reducer;
