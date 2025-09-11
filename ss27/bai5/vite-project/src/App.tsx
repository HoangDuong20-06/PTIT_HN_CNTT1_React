import { Routes, Route, Navigate } from "react-router-dom";
import BlogLayout from "./components/BlogLayout";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/blogposts" replace />} />
      <Route path="/blogposts" element={<BlogLayout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
