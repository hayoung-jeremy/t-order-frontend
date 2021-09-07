import { combineReducers } from "redux";
import cartReducer from "features/cart/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
