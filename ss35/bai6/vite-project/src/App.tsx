import { useSelector } from "react-redux";
import type { RootState } from "./store/Store";
import LanguageSelector from "./components/LanguageSelect";

export default function App() {
  const language = useSelector((state: RootState) => state.language.current);

  const texts = {
    en: {
      title: "Rikkei Academy",
    },
    vi: {
      title: "Học viện Rikkei",
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <LanguageSelector />
      <h2>{texts[language].title}</h2>
    </div>
  );
}
