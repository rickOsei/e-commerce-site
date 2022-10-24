import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cart/cartSlice";
import favoriteSliceReducer from "../features/favorite/favoriteSlice";

const store = configureStore({
  reducer: { cart: cartSliceReducer, favorite: favoriteSliceReducer },
});

export default store;
