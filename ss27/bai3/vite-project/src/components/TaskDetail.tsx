import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./Task";

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return <h2>Không tìm thấy công việc</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
}
