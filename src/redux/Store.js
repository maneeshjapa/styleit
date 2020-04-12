import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from 'redux-persist';

const middleWares = [logger];

export const Store = createStore(RootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(Store);
