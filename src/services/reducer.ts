import { combineReducers } from "redux";

import { reducer as employeesReducer } from "./employees/reducer";
import { reducer as filterReducer } from "./filter/reducer";

export const reducer = combineReducers({
  employees: employeesReducer,
  filter: filterReducer,
});
