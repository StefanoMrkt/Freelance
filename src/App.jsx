import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";

import "./App.css";

import Home from "./Pages/Home";

function ThemeWrapper() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", theme.theme.background);
    root.style.setProperty("--text-color", theme.theme.text);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  );
}

export default App;
