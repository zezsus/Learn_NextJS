/** @format */
"use client";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const NavBlogComponent = () => {
  return (
    <AppBar position='static'>
      <Container>
        <Stack p={1}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton>
              <HomeIcon sx={{ color: "white", fontSize: 30 }} />
            </IconButton>
            <Typography variant='h5'>BLOG</Typography>
          </Box>
          <Box></Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default NavBlogComponent;
