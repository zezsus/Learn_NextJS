/** @format */

interface IBlog {
  id: number;
  title: string;
  author: string;
  content: sting;
}

interface IBlogState {
  isShowAddBlog: boolean;
  isShowEditBlog: boolean;
  isShowDeleteBlog: boolean;
  blogId: number;
  blogValue:IBlog
}
