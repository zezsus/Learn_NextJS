/** @format */
"use client";

import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "@/app/redux/features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: BlogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
