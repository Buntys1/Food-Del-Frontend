import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // ...other reducers if any
  },
});

export default store; // Export the 'store' directly as default
