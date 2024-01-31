/** @format */
"use client";

import AddIcon from "@mui/icons-material/Add";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import {
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  setShowAddBlog,
  setShowDeleteBlog,
  setShowEditBlog,
} from "../redux/features/blogs/blogsSlice";
import AddBlogComponent from "@/components/addblogcomponent";
import EditBlogComponent from "@/components/editblogcomponent";
import DeleteBlogComponent from "@/components/deleteblogcomponent";
import { useQuery } from "@tanstack/react-query";
import SpinnerComponent from "@/components/spinnercomponent";

const BlogPage = () => {
  const isShowAddBlog = useSelector(
    (state: RootState) => state.blogs.isShowAddBlog
  );
  const isShowEditBlog = useSelector(
    (state: RootState) => state.blogs.isShowEditBlog
  );
  const isShowDeleteBlog = useSelector(
    (state: RootState) => state.blogs.isShowDeleteBlog
  );

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["dataBlogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (isError) {
    return console.log(error);
  }

  const handleShowAddBlog = () => {
    dispatch(setShowAddBlog(true));
  };

  const handleShowEditBlog = () => {
    dispatch(setShowEditBlog(true));
  };

  const handleShowDeleteBlog = () => {
    dispatch(setShowDeleteBlog(true));
  };

  return (
    <Stack pt={1} bgcolor={"#b8b8b8"} height={"92.4vh"}>
      <Container>
        <Button variant='contained' sx={{ mb: 2 }} onClick={handleShowAddBlog}>
          <AddIcon />
        </Button>
        <Paper sx={{ overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item: IBlog, index: number) => {
                  return (
                    <TableRow key={item.id}>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.author}</TableCell>
                      <TableCell>
                        <IconButton>
                          <PreviewIcon color='primary' />
                        </IconButton>

                        <IconButton onClick={handleShowEditBlog}>
                          <EditCalendarIcon color='warning' />
                        </IconButton>

                        <IconButton onClick={handleShowDeleteBlog}>
                          <DeleteForeverIcon color='error' />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      {isShowAddBlog && <AddBlogComponent />}
      {isShowEditBlog && <EditBlogComponent />}
      {isShowDeleteBlog && <DeleteBlogComponent />}
    </Stack>
  );
};
export default BlogPage;