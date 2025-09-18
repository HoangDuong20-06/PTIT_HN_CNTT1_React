import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./components/store";
import {toggleTheme} from "./components/store"

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.mode);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Chế độ {theme === "light" ? "Sáng" : "Tối"}</h1>
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => dispatch(toggleTheme())}
        />
        {theme === "light" ? "Sáng" : "Tối"}
      </label>
    </div>
  );
};
export default App;