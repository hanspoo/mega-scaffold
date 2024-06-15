import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  currentImage: number;
};

const INITIAL: StateType = {
  currentImage: 0,
};

export const addsSlice = createSlice({
  name: 'addsSlice',
  initialState: INITIAL,
  reducers: {
    incrementImage: (state) => {
      return { ...state, currentImage: state.currentImage + 1 };
    },
  },
});

export const { incrementImage } = addsSlice.actions;
export default addsSlice.reducer;
