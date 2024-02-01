/** @format */
"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IBlogState = {
  isShowAddBlog: false,
  isShowEditBlog: false,
  isShowDeleteBlog: false,
  blogId: 0,
  blogValue: {
    id: 0,
    title: "",
    author: "",
    content: "",
  },
  searchValue: "",
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

    setBlogId: (state: IBlogState, action: PayloadAction<number>) => {
      state.blogId = action.payload;
    },

    getBlogValue: (state: IBlogState, action: PayloadAction<IBlog>) => {
      state.blogValue = action.payload;
    },

    getSearchValue: (state: IBlogState, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setShowAddBlog,
  setShowEditBlog,
  setShowDeleteBlog,
  setBlogId,
  getBlogValue,
  getSearchValue,
} = blogsSlice.actions;
export default blogsSlice.reducer;
