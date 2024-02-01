/** @format */
"use client";

import SpinnerComponent from "@/components/spinnercomponent";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const BlogDetail = ({ params }: { params: { idblog: string } }) => {
  const fetchDataDetailBlog = async () => {
    const res = await fetch(`http://localhost:8000/blogs/${params.idblog}`);
    const data = res.json();
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["blogDetailData"],
    queryFn: fetchDataDetailBlog,
  });

  if (isLoading) {
    return <SpinnerComponent />;
  }

  return (
    <Container sx={{ mt: 3 }}>
      <Card sx={{ minWidth: "80%" }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {data.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {data.author}
          </Typography>
          <TextField
            value={data.content}
            multiline
            rows={15}
            fullWidth
            disabled
            variant='standard'
          />
        </CardContent>
      </Card>
    </Container>
  );
};
export default BlogDetail;
