/** @format */
"use client";

import { setShowDeleteBlog } from "@/app/redux/features/blogs/blogsSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { ModalBody, ModalFooter, ModalHeader, style } from "@/styles/form";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const DeleteBlogComponent = () => {
  const isShowDeleteBlog = useSelector(
    (state: RootState) => state.blogs.isShowDeleteBlog
  );
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => {
    dispatch(setShowDeleteBlog(false));
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
          <Button variant='contained' color='error'>
            Delete
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Box>
    </Modal>
  );
};
export default DeleteBlogComponent;
