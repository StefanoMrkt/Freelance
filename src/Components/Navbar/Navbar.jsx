import React from "react";

import style from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/themeSlice.jsx";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { getCalApi } from "@calcom/embed-react";

import { darkTheme, lightTheme } from "../../../theme.jsx";

export default function NavbarComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(null);

  const currentTheme = useSelector((state) => state.theme.theme);

  function handleHome() {
    setActivePage("Home");
    navigate("/");
  }

  function handleWeb() {
    setActivePage("Web");
  }

  function handleSocial() {
    setActivePage("Social");
  }

  function handleBlog() {
    setActivePage("Blog");
    navigate("/blog");
  }

  function changeTheme(event) {
    dispatch(toggleTheme());
  }

  const MaterialUISwitch = styled(Switch)(({ theme: currentTheme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            currentTheme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor:
        currentTheme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor:
        currentTheme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className={style.divNav}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container id="navbarTop" className={style.navbarTop}>
          <Navbar.Brand className={style.navTitle}>
            <Link className={style.logo} to="/">
              Stefano Montemarli
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className={style.divPages}>
                <Link className={style.navPage} to="/" onClick={handleHome}>
                  Home
                  <div
                    className={
                      activePage === "Home" ? style.activeMark : style.mark
                    }
                  ></div>
                </Link>
                <Link
                  className={style.navPage}
                  to="/servizi/web-design"
                  onClick={handleWeb}
                >
                  Web Design
                  <div
                    className={
                      activePage === "Web" ? style.activeMark : style.mark
                    }
                  ></div>
                </Link>
                <Link
                  className={style.navPage}
                  to="/servizi/social-media"
                  onClick={handleSocial}
                >
                  Social Media
                  <div
                    className={
                      activePage === "Social" ? style.activeMark : style.mark
                    }
                  ></div>
                </Link>
                {/* <Nav.Link className={style.navPage} onClick={handleBlog}>
                  Blog
                  <div
                    className={
                      activePage === "Blog" ? style.activeMark : style.mark
                    }
                  ></div>
                </Nav.Link> */}
              </div>
            </Nav>
            <div className={style.divDx}>
              <p
                style={{
                  color: currentTheme === lightTheme ? "white" : "gray",
                }}
                className={style.themeText}
              >
                Chiaro
              </p>
              <div className={style.switch}>
                <MaterialUISwitch
                  checked={currentTheme === darkTheme}
                  onChange={changeTheme}
                />
              </div>

              <p
                style={{ color: currentTheme === darkTheme ? "white" : "gray" }}
                className={style.themeText}
              >
                Scuro
              </p>
              <a className={style.contatti} href="#Contacts">
                Contattami
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
