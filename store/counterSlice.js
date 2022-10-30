import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});


export const {increament,decrement} = counterSlice.actions;
export const selectCount = (state) =>state.counter.value;

export default counterSlice.reducer;