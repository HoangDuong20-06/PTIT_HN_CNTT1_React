import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { toggleTheme } from "../store/themeSlice";
import { useEffect } from "react";

export default function ThemeSwitcher() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <button
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#fff" : "#333",
          border: "1px solid #ccc",
          borderRadius: "10px",
          color: theme === "light" ? "#000" : "#fff",
        }}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}