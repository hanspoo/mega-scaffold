import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem } from '@coba/api-interfaces';

export interface CounterSliceState {
  cart?: Cart;
}

const EmptyCart: Cart = {
  createdAt: new Date().getTime(),
  items: [],
};
const initialState: CounterSliceState = {
  cart: EmptyCart,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const items = state.cart?.items.concat(action.payload);
      return { ...state, items };
    },
  },
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
});

// Action creators are generated for each case reducer function.
export const { addItem } = cartSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
