import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/Store";
import { setLanguage } from "../store/LanguageSlice";

export default function LanguageSelector() {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.current);

  return (
    <select
      value={language}
      onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
    >
      <option value="vi">Vietnamese</option>
      <option value="en">English</option>
    </select>
  );
}
