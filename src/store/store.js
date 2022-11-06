import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/cart/cartSlice";
import favoriteSliceReducer from "../features/favorite/favoriteSlice";
import modalSliceReducer from "../features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    favorite: favoriteSliceReducer,
    modal: modalSliceReducer,
  },
});

export default store;
