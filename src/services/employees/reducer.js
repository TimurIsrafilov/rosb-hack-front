import { createSlice } from "@reduxjs/toolkit";
import { loadEmployees } from "./actions";

const initialState = {
  employees: null,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loadEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      });
  },
});

export const selectEmployees = (state) => state.employees.employees;
export const selectEmployeesLoading = (state) => state.employees.loading;
export const selectEmployeesError = (state) => state.employees.error;

export const reducer = employeesSlice.reducer;
export default reducer;
