import { useState, useEffect } from "react";
import "../css/Home.css";
import myImg from "../assets/Jay_pic1.jpg";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Button from "./Button.jsx";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ["Web Developer", "Frontend Engineer", "React Specialist", "Software Developer"];

  // Animation for fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Text typing animation
  useEffect(() => {
    const text = roles[currentIndex];
    let charIndex = 0;
    let typingInterval;
    let deletingInterval;

    // Type the text
    const typeText = () => {
      if (charIndex <= text.length) {
        setTypedText(text.substring(0, charIndex));
        charIndex++;
      } else {
        // Pause at the end
        clearInterval(typingInterval);
        setTimeout(startDeleting, 2000); // Wait before deleting
      }
    };

    // Delete the text
    const startDeleting = () => {
      deletingInterval = setInterval(() => {
        if (charIndex > 0) {
          setTypedText(text.substring(0, charIndex - 1));
          charIndex--;
        } else {
          clearInterval(deletingInterval);
          // Move to next role
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }, 50); // Deleting speed
    };

    typingInterval = setInterval(typeText, 100); // Typing speed

    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [currentIndex]);
  const handleClick = () => {
    navigate("/contact");
  }

  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="hero-section">
          <div className={`profile-container ${isVisible ? 'visible' : ''}`}>
            <div className="profile-content">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <img src={myImg} alt="Profile" />
                </div>
                <div className="profile-decoration"></div>
              </div>

              <div className="profile-text">
                <h1>
                  Hi, I'm <span className="highlight">Janmejay Pandya</span>
                </h1>
                <h2 className="role-text">
                  I'm a <span className="typed-text">{typedText}</span>
                  <span className="cursor"></span>
                </h2>
                <p>
                  Web Developer specializing in front-end development. Experienced
                  with all stages of the development cycle for dynamic web projects.
                  Well-versed in numerous programming languages and libraries including
                  HTML5, React, Java, C/C++, JavaScript, Python, BeautifulSoup, CSS, MySQL.
                  Strong background in project management and customer relations.
                </p>
                <div className="action-buttons">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume-btn primary-btn">
                      <span className="btn-icon">📄</span> View Resume
                    </button>
                  </a>
                  <a href="#contact" className="smooth-scroll">
                    <button onClick={handleClick} className="contact-btn secondary-btn">
                      <span className="btn-icon">💬</span> Contact Me
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper about-wrapper">
          <About />
        </div>

        <div className="section-wrapper skills-wrapper">
          <Skills />
        </div>

        <div className="section-wrapper projects-wrapper">
          <Projects />
        </div>

        <Button />
        <Footer />
      </div>
    </>
  );
}

export default Home;
