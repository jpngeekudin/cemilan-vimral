import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null as string | null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
  },
});

export const { selectCategory } = productSlice.actions;
export default productSlice.reducer;
