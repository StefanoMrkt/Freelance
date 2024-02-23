import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../redux/themeSlice.jsx";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
