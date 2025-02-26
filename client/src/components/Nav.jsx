import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    // Set active tab based on current path
    setActiveTab(location.pathname);

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const navigateTo = (path) => {
    navigate(path);
    setActiveTab(path);
  };

  return (
    <header className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => navigateTo("/")}>
          <span className="logo-text">Janmejay Pandya</span>
        </div>

        <nav className="navbar-menu">
          <ul className="navbar-items">
            <li
              className={`navbar-item ${activeTab === "/" ? "active" : ""}`}
              onClick={() => navigateTo("/")}
            >
              <span className="navbar-item-text">Home</span>
              {activeTab === "/" && <span className="navbar-item-indicator" />}
            </li>
            <li
              className={`navbar-item ${activeTab === "/contact" ? "active" : ""}`}
              onClick={() => navigateTo("/contact")}
            >
              <span className="navbar-item-text">Contact Me</span>
              {activeTab === "/contact" && <span className="navbar-item-indicator" />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;