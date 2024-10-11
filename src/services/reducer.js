import { combineReducers } from "redux";

import { reducer as emploeesReducer } from "./employees/reducer";

export const reducer = combineReducers({
  emploees: emploeesReducer,
});
