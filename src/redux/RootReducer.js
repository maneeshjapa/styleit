import { combineReducers } from "redux";
import UserReducer from "./user/UserReducer";
import CartReducer from "./cart/CartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DirectoryReducer from "./directory/DirectoryReducer";
import ShopReducer from "./shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: DirectoryReducer,
  SHOP_DATA: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
