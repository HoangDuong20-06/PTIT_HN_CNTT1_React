import { Link } from "react-router-dom";
import { tasks } from "./Task";

export default function TaskList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách công việc</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "10px 0" }}>
            <strong>{task.name}</strong>
            <br />
            <Link to={`/tasks/${task.id}`}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
