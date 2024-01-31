/** @format */
"use client";

import { setShowEditBlog } from "@/app/redux/features/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { ModalBody, ModalFooter, ModalHeader, style } from "@/styles/form";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditBlogComponent = () => {
  const isShowEditBlog = useSelector(
    (state: RootState) => state.blogs.isShowEditBlog
  );
  const dispatch = useDispatch<AppDispatch>();
  const [editValue, setEditValue] = useState<IBlog>({
    id: 0,
    title: "",
    author: "",
    content: "",
  });
  const { title, author, content } = editValue;

  const handleOnChangeEditBlog = (e: any) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(setShowEditBlog(false));
  };

  return (
    <Modal open={isShowEditBlog}>
      <Box sx={style}>
        <ModalHeader variant='h5' sx={{ bgcolor: "orange" }}>
          EDIT BLOG
        </ModalHeader>
        <ModalBody>
          <TextField
            variant='outlined'
            label='Title'
            name='title'
            value={title}
            onChange={handleOnChangeEditBlog}
          />
          <TextField
            variant='outlined'
            label='Author'
            name='author'
            value={author}
            onChange={handleOnChangeEditBlog}
          />
          <TextField
            variant='outlined'
            label='Content'
            rows={3}
            name='content'
            value={content}
            onChange={handleOnChangeEditBlog}
            multiline
          />
        </ModalBody>
        <ModalFooter>
          <Button variant='contained' color='warning'>
            Save
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Box>
    </Modal>
  );
};
export default EditBlogComponent;
