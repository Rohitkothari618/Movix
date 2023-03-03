import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    geners: {},
  },
  reducers: {
    apiConfigeration: (state, action) => {
      state.url = action.payload;
    },
    getgerners: (state, action) => {
      state.geners = action.payload;
    },
  },
});

export const { apiConfigeration, getgeners } = homeSlice.actions;

export default homeSlice.reducer;
