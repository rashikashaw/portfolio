import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useState } from 'react';
import { RootState } from './store';

export type cartStateType = {
  items: Products[];
};

const initialState: cartStateType = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: cartStateType, action: PayloadAction<Products>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state: cartStateType, action: PayloadAction<{id: string}>) => {
      const index = state.items.findIndex((items: Products) => items._id === action.payload.id);
      const newCart = [...state.items];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        // eslint-disable-next-line no-console
        console.log(`can't remove ${action.payload.id}, not in cart`);
      }
      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectBasketItems = (state: RootState) => state.cart.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.cart.items.filter((item: Products) => item._id === id);
};
export const selectBasketTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item: Products) => (total += item.price),
    0,
  );
