import { createSlice } from "@reduxjs/toolkit";
// import { removeItem } from "localforage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { removeItem, addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
