import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorData: null,
  data: null,
};

// Create a slice
const subCategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    saveSubCategoriesData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { saveSubCategoriesData } = subCategoriesSlice.actions;
export default subCategoriesSlice.reducer;
