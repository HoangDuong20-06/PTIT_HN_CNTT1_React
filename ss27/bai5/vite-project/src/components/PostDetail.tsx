import { useParams } from "react-router-dom";
import { posts } from "./data";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Không tìm thấy bài viết</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}