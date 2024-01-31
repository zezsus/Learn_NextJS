/** @format */
"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IBlogState = {
  isShowAddBlog: false,
  isShowEditBlog: false,
  isShowDeleteBlog: false,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setShowAddBlog: (state: IBlogState, action: PayloadAction<boolean>) => {
      state.isShowAddBlog = action.payload;
    },

    setShowEditBlog: (state: IBlogState, action: PayloadAction<boolean>) => {
      state.isShowEditBlog = action.payload;
    },

    setShowDeleteBlog: (state: IBlogState, action: PayloadAction<boolean>) => {
      state.isShowDeleteBlog = action.payload;
    },
  },
});

export const { setShowAddBlog, setShowEditBlog, setShowDeleteBlog } =
  blogsSlice.actions;
export default blogsSlice.reducer;
