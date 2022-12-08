import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandyAsync = createAsyncThunk(
  "candies/fetchCandy",
  async (candyId) => {
    try {
      console.log("HELLO FROM THE SINGLE CANDY THUNK");
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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCandyAsync.fulfilled,
      (state, action) => (action.payload)
    );
  },
});

export const selectCandy = (state) => {
  return state.candy;
};

export default candySlice.reducer;
