import { combineReducers } from "redux";
import produstReducer from "./product";

const rootReducer = combineReducers({
  product: produstReducer,
});

export default rootReducer;
