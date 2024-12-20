import { createSlice } from "@reduxjs/toolkit";

interface IFilterElement {
  type: string;
  options: Array<string>;
}

interface IFilterState {
  value: Array<IFilterElement>;
}

const initialState: IFilterState = {
  value: [],
};

export const filterSlice = createSlice({
  name: "filtervalue",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      const index = state.value.findIndex(
        (obj) => obj["type"] === action.payload.type
      );

      if (index !== -1) {
        state.value[index] = action.payload;
      } else {
        state.value = [...state.value, action.payload];
      }
    },

    deleteFilterValue: (state) => {
      state.value = [];
    },
  },
});

export const getFilterValue = (state: { filter: { value: any } }) =>
  state.filter.value;

export const reducer = filterSlice.reducer;
export const { setFilterValue, deleteFilterValue } = filterSlice.actions;

export default reducer;
