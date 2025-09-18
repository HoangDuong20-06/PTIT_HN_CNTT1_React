import { createStore } from "redux";
const TOGGLE_THEME = "TOGGLE_THEME";
export const toggleTheme = () => ({ type: TOGGLE_THEME });
export interface ThemeState {
  mode: "light" | "dark"; 
}
const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";

const initialState: ThemeState = {
  mode: savedTheme,
};
const themeReducer = (state: ThemeState = initialState, action: { type: string }): ThemeState => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const newMode: "light" | "dark" = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return { ...state, mode: newMode };
    }
    default:
      return state;
  }
};
export const store = createStore(themeReducer);
export type RootState = ReturnType<typeof store.getState>;