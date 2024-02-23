import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../theme";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme =
        state.theme.background === lightTheme.background
          ? darkTheme
          : lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
