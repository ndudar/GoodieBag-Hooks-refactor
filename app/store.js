import { configureStore } from "@reduxjs/toolkit";

import candiesReducer from "./candiesSlice";
import candyReducer from "./candySlice"

export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    candy: candyReducer,
  },
});
