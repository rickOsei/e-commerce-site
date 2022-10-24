import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "favorite",
  initialState: { favorite: [] },
  reducers: {
    addToFavorite: (state, action) => {
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    },

    removeItem: (state, action) => {
      return {
        ...state,
        favorite: state.favorite.filter((item) => item.id !== action.payload),
      };
    },
    clearFavorite: (state, action) => {
      return {
        ...state,
        favorite: [],
      };
    },
  },
};

const favoriteSlice = createSlice(options);

export const { addToFavorite, removeItem, clearFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
