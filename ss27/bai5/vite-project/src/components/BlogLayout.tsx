import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: "200px", background: "#4f46e5", color: "white", padding: "20px" }}>
        <h2>My Blog</h2>
        <nav>
          <ul>
            <li>
              <Link to="/blogposts" style={{ color: "white" }}>Posts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}