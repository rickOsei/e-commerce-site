import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "cart",
  initialState: { cart: [], amount: 0, total: 0 },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    increaseAmount: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        }),
      };
    },
    decreaseAmount: (state, action) => {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        }),
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    },
    getTotals: (state, action) => {
      let { amount, total } = state.cart.reduce(
        (totals, item) => {
          let { price, amount } = item;
          totals.amount += amount;
          totals.total += amount * price;
          return totals;
        },
        { amount: 0, total: 0 }
      );
      return {
        ...state,
        amount,
        total,
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
};

const cartSlice = createSlice(options);

export const {
  addToCart,
  removeItem,
  clearCart,
  decreaseAmount,
  increaseAmount,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
