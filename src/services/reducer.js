import { combineReducers } from "redux";

import { reducer as emploeesReducer } from "./employees/reducer";
import { reducer as filterReducer } from "./filter/reducer";

export const reducer = combineReducers({
  emploees: emploeesReducer,
  filter: filterReducer,
});
