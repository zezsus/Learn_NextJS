/** @format */
"use client";

import { setShowDeleteBlog } from "@/app/redux/features/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { ModalBody, ModalFooter, ModalHeader, style } from "@/styles/form";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

const DeleteBlogComponent = () => {
  const isShowDeleteBlog = useSelector(
    (state: RootState) => state.blogs.isShowDeleteBlog
  );
  const blogId = useSelector((state: RootState) => state.blogs.blogId);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(setShowDeleteBlog(false));
  };

  const queryClient = useQueryClient();

  const deleteBlogMutation = useMutation(
    async () => {
      const res = await fetch(`http://localhost:8000/blogs/${blogId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["dataBlogs"]);
        handleClose();
      },
    }
  );

  const handleDelete = () => {
    deleteBlogMutation.mutate();
  };

  return (
    <Modal open={isShowDeleteBlog}>
      <Box sx={style}>
        <ModalHeader variant='h5' sx={{ bgcolor: "blue" }}>
          DELETE BLOG
        </ModalHeader>
        <ModalBody>
          <Typography variant='h6'>Do you want delete this item?</Typography>
        </ModalBody>
        <ModalFooter>
          <Button variant='contained' color='error' onClick={handleDelete}>
            Yes
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            No
          </Button>
        </ModalFooter>
      </Box>
    </Modal>
  );
};
export default DeleteBlogComponent;
