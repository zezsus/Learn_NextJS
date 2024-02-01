/** @format */
"use client";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { getSearchValue } from "@/app/redux/features/blogs/blogsSlice";

const NavBlogComponent = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleHome = () => {
    router.push("/");
  };

  const handleSearchBlog = () => {
    dispatch(getSearchValue(searchValue));
  };

  return (
    <AppBar position='static'>
      <Container>
        <Toolbar sx={{ display: "flex", gap: "2rem" }}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton onClick={handleHome}>
              <HomeIcon sx={{ color: "white", fontSize: 30 }} />
            </IconButton>
            <Typography variant='h5'>BLOG</Typography>
          </Box>
          <NavBody>
            <Link href={"/blogs"}>Blog</Link>
            <Search>
              <InputSearch
                placeholder='Search name...'
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
              />
              <SearchIconWrapper onClick={handleSearchBlog}>
                <SearchIcon />
              </SearchIconWrapper>
            </Search>
          </NavBody>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBlogComponent;

const NavBody = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const Search = styled("div")({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "transparent",
  marginLeft: 0,
  display: "flex",
  justifyContent: "end",
  width: "100%",
});

const SearchIconWrapper = styled(IconButton)({
  border: "none",
  borderRadius: 0,
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
  backgroundColor: "#DDDDDD",

  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
});

const InputSearch = styled(InputBase)({
  border: "none",
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",
  width: "50%",
  maxHeight: "max-content",
  paddingLeft: "10px",
  backgroundColor: "#DDDDDD",
});
