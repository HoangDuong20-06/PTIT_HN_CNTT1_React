import { Link } from "react-router-dom";
import { posts } from "./data";

export default function Posts() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: "15px 0" }}>
            <h3>
              <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}