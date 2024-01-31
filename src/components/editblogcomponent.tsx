/** @format */
"use client";

import { setShowEditBlog } from "@/app/redux/features/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { ModalBody, ModalFooter, ModalHeader, style } from "@/styles/form";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EditBlogComponent = () => {
  const isShowEditBlog = useSelector(
    (state: RootState) => state.blogs.isShowEditBlog
  );
  const blogValue = useSelector((state: RootState) => state.blogs.blogValue);
  const dispatch = useDispatch<AppDispatch>();

  const [editValue, setEditValue] = useState<IBlog>(blogValue);

  const handleOnChangeEditBlog = (e: any) => {
    setEditValue({ ...editValue, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    dispatch(setShowEditBlog(false));
    setEditValue({
      id: 0,
      title: "",
      author: "",
      content: "",
    });
  };

  const clientQueryEdit = useQueryClient();

  const dataEditMutation = useMutation(
    async () => {
      const res = await fetch(`http://localhost:8000/blogs/${editValue.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editValue),
      });
      const blogUpdate = await res.json();
      return blogUpdate;
    },
    {
      onSuccess: () => {
        clientQueryEdit.invalidateQueries(["dataBlogs"]), handleClose();
      },
    }
  );

  const handleSaveBlogEdit = () => {
    dataEditMutation.mutate();
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
            value={editValue.title}
            onChange={handleOnChangeEditBlog}
          />
          <TextField
            variant='outlined'
            label='Author'
            name='author'
            value={editValue.author}
            onChange={handleOnChangeEditBlog}
          />
          <TextField
            variant='outlined'
            label='Content'
            rows={4}
            name='content'
            value={editValue.content}
            onChange={handleOnChangeEditBlog}
            multiline
          />
        </ModalBody>
        <ModalFooter>
          <Button
            variant='contained'
            color='warning'
            onClick={handleSaveBlogEdit}>
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
