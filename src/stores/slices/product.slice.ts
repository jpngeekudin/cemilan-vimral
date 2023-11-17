import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/category.interface";

const initialState = {
  selectedCategory: null as ICategory | null,
  search: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectCategory: (state, { payload }: { payload: ICategory | null }) => {
      state.selectedCategory = payload;
    },
    setSearch: (state, { payload }: { payload: string }) => {
      state.search = payload;
    },
  },
});

export const { selectCategory, setSearch } = productSlice.actions;
export default productSlice.reducer;
