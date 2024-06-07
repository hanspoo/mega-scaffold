import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart/cartSlice';

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(cartSlice);
// ...

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the type of makeStore
// Infer the `RootState` and `AppDispatch` types from the store itself
