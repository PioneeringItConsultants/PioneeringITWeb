import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const themes = ["dark", "light"];

const getInitialTheme = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
};

const initialState: ThemeState = {
  theme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action: PayloadAction<string>) => {
      if (themes.includes(action.payload)) {
        state.theme = action.payload;
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
