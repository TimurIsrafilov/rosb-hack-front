// import { employeesSlice } from "./reducer";
import { createSlice } from "@reduxjs/toolkit";
import { loadEmployees } from "./actions";
import { TypeEmployee } from "../../types/types";
import { RootState } from "../store";

type TypeEmployeesState = {
  employees: Array<TypeEmployee>;
  loading: boolean;
  error: unknown;
};

const initialState: TypeEmployeesState = {
  employees: [],
  loading: false,
  error: null,
};

//@ts-ignore
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

export const getEmployees = (state: RootState) => state.employees.employees;
export const getEmployeesLoading = (state: RootState) =>
  state.employees.loading;
export const getEmployeesError = (state: RootState) => state.employees.error;

export const reducer = employeesSlice.reducer;
export default reducer;
