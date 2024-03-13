export type FC = (props: { children: ReactNode }) => ReactNode;

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export type PostsPage = {
  totalPosts: number;
  pageNo: number;
  pageSize: number;
  totalPages: number;
  posts: Array<Post>;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  description: string;
  createdAt: string;
  comments: Array<Comment>;
};

export type Comment = {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  user: User;
};

export type User = {
  id: number;
  username: string;
  email: string;
};
