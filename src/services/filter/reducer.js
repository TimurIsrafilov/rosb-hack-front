import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const filterSlice = createSlice({
  name: "filtervalue",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.value = action.payload;
    },

    deleteFilterValue: (state) => {
      state.value = null;
    },
  },
});

export const getFilterValue = (state) => state.filter.value;

export const reducer = filterSlice.reducer;
export const { setFilterValue, deleteFilterValue } = filterSlice.actions;

export default reducer;
