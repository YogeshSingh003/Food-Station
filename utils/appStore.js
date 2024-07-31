import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // cart: cartSlice,
    cart: cartReducer,
  },
});

export default appStore;
