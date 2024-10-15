import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const loadEmployees = createAsyncThunk("employees/loadEmployees", async () => {
  return api.getEmployeesInfo();
});
