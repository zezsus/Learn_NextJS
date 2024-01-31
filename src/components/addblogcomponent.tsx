/** @format */
"use client";

import { setShowAddBlog } from "@/app/redux/features/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { ModalBody, ModalFooter, ModalHeader, style } from "@/styles/form";
import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "./spinnercomponent";

const AddBlogComponent = () => {
  const isShowAddBlog = useSelector(
    (state: RootState) => state.blogs.isShowAddBlog
  );
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const queryClient = useQueryClient();

  const blogDataMutation = useMutation(
    async (newBlog) => {
      const res = await fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      return await res.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["dataBlogs"]);
        handleClose();
      },
    }
  );

  // if (isLoading) {
  //   return <SpinnerComponent />;
  // }

  const handleClose = () => {
    dispatch(setShowAddBlog(false));
    setTitle("");
    setAuthor("");
    setContent("");
  };

  const handleAddBlog = () => {
    if (!title || !author || !content) {
      return alert("Please complete all fields");
    } else {
      const newBlog = {
        title: title,
        author: author,
        content: content,
      };
      blogDataMutation.mutate(newBlog);
    }
  };

  return (
    <Modal open={isShowAddBlog}>
      <Box sx={style}>
        <ModalHeader variant='h5' sx={{ bgcolor: "blue" }}>
          ADD BLOG
        </ModalHeader>
        <ModalBody>
          <TextField
            variant='outlined'
            label='Title'
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <TextField
            variant='outlined'
            label='Author'
            value={author}
            onChange={(e: any) => setAuthor(e.target.value)}
          />
          <TextField
            variant='outlined'
            label='Content'
            rows={3}
            value={content}
            onChange={(e: any) => setContent(e.target.value)}
            multiline
          />
        </ModalBody>
        <ModalFooter>
          <Button variant='contained' onClick={handleAddBlog}>
            Add
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Box>
    </Modal>
  );
};
export default AddBlogComponent;
