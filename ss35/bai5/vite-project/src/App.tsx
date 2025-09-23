import Sidebar from "./components/sideBar";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Nội dung chính</h1>
      </div>
    </div>
  );
}