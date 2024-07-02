import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorData: null,
  data: null,
};

// Create a slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    saveCategories(state, action) {
      state.data = action.payload;
    },
  },
});

export const { saveCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
