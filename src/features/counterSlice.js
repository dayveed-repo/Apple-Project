import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  currentOrder: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProductOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
  },
});

export const { addProductOrder } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
