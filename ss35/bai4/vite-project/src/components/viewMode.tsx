import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { toggleView } from "../store/viewSlice";

export default function DataView() {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch<AppDispatch>();

  const data = [1, 2, 3, 4];

  const containerStyle: React.CSSProperties =
    mode === "list"
      ? {
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }
      : {
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        };

  const itemStyle: React.CSSProperties =
    mode === "list"
      ? {
          width: "200px",
          padding: "20px",
          backgroundColor: "red",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }
      : {
          width: "80px",
          padding: "20px",
          backgroundColor: "red",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => dispatch(toggleView())}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div style={containerStyle}>
        {data.map((item) => (
          <div key={item} style={itemStyle}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}