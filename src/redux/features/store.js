// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/CartSlice";
import { baseApi } from "../api/baseApi";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PERSIST,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import { persistStore } from "redux-persist";
import { combineReducers } from "redux";

// Persist configuration for auth
const authPersistConfig = {
  key: "auth",
  storage,
};

// Persist configuration for cart
const cartPersistConfig = {
  key: "cart",
  storage,
};

// Combine reducers with persistence
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistReducer(authPersistConfig, authReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
});

// Create the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Create the persistor
export const persistor = persistStore(store);
