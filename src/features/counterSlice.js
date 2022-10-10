import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  currentOrder: null,
  priceOption: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProductOrder: (state, action) => {
      state.currentOrder = action.payload;
    },

    changeOrderPriceOption: (state, action) => {
      state.priceOption = action.payload;
    },
  },
});

export const { addProductOrder, changeOrderPriceOption } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
