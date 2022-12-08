import { configureStore } from "@reduxjs/toolkit";

import candiesReducer from "./candiesSlice";

export const store = configureStore({
  reducer: {
    candies: candiesReducer,
  },
});
