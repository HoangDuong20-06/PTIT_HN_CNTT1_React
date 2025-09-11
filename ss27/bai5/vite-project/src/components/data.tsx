export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bài viết số 1",
    excerpt: "Đây là mô tả ngắn của bài viết số 1...",
    content: "Nội dung chi tiết của bài viết số 1. Đây là phần nội dung dài hơn."
  },
  {
    id: 2,
    title: "Bài viết số 2",
    excerpt: "Đây là mô tả ngắn của bài viết số 2...",
    content: "Nội dung chi tiết của bài viết số 2."
  },
  {
    id: 3,
    title: "Bài viết số 3",
    excerpt: "Đây là mô tả ngắn của bài viết số 3...",
    content: "Nội dung chi tiết của bài viết số 3."
  }
];
