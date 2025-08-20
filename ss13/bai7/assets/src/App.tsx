import './App.css'
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const language = theme === "light" ? "english" : "vietnamese";
  const themeClass = theme === "light" ? "app light" : "app dark";
  const themeText = theme === "light" ? "Sáng" : "Tối";
   const languageText = language === "english" ? "English" : "Tiếng Việt";
  return (
    <div className={themeClass}>
      <h2>Nền: {themeText}</h2>
      <h2>Ngôn ngữ: {languageText}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Đổi Theme
      </button>
    </div>
  );
}
export default App;