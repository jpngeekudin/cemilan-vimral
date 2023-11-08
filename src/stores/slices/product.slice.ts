import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category.interface";

const initialState = {
  selectedCategory: null as ICategory | null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectCategory: (state, { payload }: { payload: ICategory | null }) => {
      state.selectedCategory = payload;
    },
  },
});

export const { selectCategory } = productSlice.actions;
export default productSlice.reducer;
