import axios from 'axios';
import { Cart, CartItem } from '@coba/api-interfaces';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchShoppingCart = createAsyncThunk('api/cart', () => {
  return fetch('/api/cart').then((r) => r.json());
});

export const addToCart = createAsyncThunk('api/add-item', (item: CartItem) => {
  return axios.post('/api/cart', item).then((r) => r.data);
});

export type RestStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

type StateType = {
  status: RestStatus;
  cart?: Cart;
  error: string;
};

const INITIAL: StateType = {
  status: 'idle',
  cart: undefined,
  error: '',
};

//Reducer
export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: INITIAL,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchShoppingCart
      .addCase(fetchShoppingCart.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        fetchShoppingCart.fulfilled,
        (state, action: PayloadAction<Cart>) => {
          state.status = 'fulfilled';
          state.cart = action.payload;
        }
      )
      .addCase(fetchShoppingCart.rejected, (state, action) => {
        state.status = 'rejected';
      })
      .addCase(addToCart.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<Cart>) => {
        state.status = 'fulfilled';
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export default shoppingCartSlice.reducer;
