import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";

import "./App.css";

import Home from "./Pages/Home";
import Social from "./Pages/Social";
import Web from "./Pages/Web";
// import Blog from "./Pages/Blog";
import FreeLessonDesign from "./Pages/FreeLessonDesign";
import Call from "./Pages/Call";
import Error from "./Pages/Error";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ThemeWrapper() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-color", theme.theme.background);
    root.style.setProperty("--text-color", theme.theme.text);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servizi/social-media" element={<Social />} />
        <Route path="/servizi/web-design" element={<Web />} />
        <Route path="/lezione-gratuita-design" element={<FreeLessonDesign />} />
        <Route path="/call-prenotata" element={<Call />} />
        <Route path="*" element={<Error />} />

        {/* <Route path="/blog" element={<Blog />} /> */}
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
