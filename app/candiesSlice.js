import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCandiesAsync = createAsyncThunk(
  "candies/fetchCandies",
  async () => {
    const response = await axios.get("/api/candies");
    const candies = response.data;
    return candies;
  }
);

export const candiesSlice = createSlice({
  name: "candies",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCandiesAsync.fulfilled,
      (state, action) => (action.payload)
    );
  },
});

export const selectCandies = (state) => {
  return state.candies;
}
export default candiesSlice.reducer;
