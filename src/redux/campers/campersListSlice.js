import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOperations';

export const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: false,
    campersPage: 1,
    campersLimit: 30,
    maxPage: 0,
  },
  reducers: {
    changeCampersPage(state, action) {
      state.campersPage += action.payload;
    },
    changeCampersReset(state) {
      state.campersPage = 1;
      state.items = [];
    },
  },

  extraReducers: builder =>
    builder
      .addCase(fetchCampers.pending, pending)
      .addCase(fetchCampers.fulfilled, ListFulfilled)
      .addCase(fetchCampers.rejected, rejected),
});

function ListFulfilled(state, { payload }) {
  // state.isLoading = false;
  // state.maxPage = payload.maxPage;
  // if (state.campersPage === 1 && state.items.length === 0) {
  //   state.items.push(...payload.data);
  // }
  // if (state.campersPage > 1) {
  // state.items.push(...payload.data);
  // }
  state.items = payload;
}

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

export const campersListReducer = campersSlice.reducer;
export const { changeCampersPage, changeCampersReset } = campersSlice.actions;
