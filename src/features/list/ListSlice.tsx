import { createSlice } from "@reduxjs/toolkit";
import type { ListItem, ListState } from "../../types/product";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ListState = {
  list: [],
};

const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Omit<ListItem, "isExist">>) => {
      state.list.push({
        ...action.payload,
        isExist: true,
      });
    },
    removeFromList: (state, action: PayloadAction<{ id: number | string }>) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[index].isExist = false;
      const newList = state.list.filter(
        (item) => item.id !== action.payload.id
      );
      state.list = newList;
    },
  },
});

export default ListSlice.reducer;
export const { addToList, removeFromList } = ListSlice.actions;
