import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push({
        ...action.payload,
        isExist: true,
      });
    },
    removeFromList: (state, action) => {
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
