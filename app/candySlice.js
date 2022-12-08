import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandyAsync = createAsyncThunk(
  "candies/fetchCandy",
  async (candyId) => {
    try {
      const response = await axios.get(`/api/candies/${candyId}`);
      const candy = response.data;
      return candy;
    } catch (err) {
      console.log("ERROR IN THE CANDYSLICE THUNK", err);
    }
  }
);

export const candySlice = createSlice({
  name: "candy",
  initialState: {
    name: "",
    description: "",
    quantity: 0,
    imageUrl: "",
  },
  reducers: {
    increment(state) {
      state.quantity += 1;
    },
    decrement(state) {
      state.quantity -= 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchCandyAsync.fulfilled,
      (state, action) => action.payload
    );
  },
});

export const selectCandy = (state) => {
  return state.candy;
};

export const { increment, decrement } = candySlice.actions;

export default candySlice.reducer;
