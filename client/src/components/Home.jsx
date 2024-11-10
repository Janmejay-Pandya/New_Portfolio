// import "../css/Home.css"
// import myImg from "../assets/Jay_pic1.jpg";
// import Nav from "./Nav.jsx";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Button from "./Button.jsx";
// import Footer from "./Footer.jsx";

// function Home() {

//   return <>
//     <Nav></Nav>
//     <div className="profile-container">
//       <div className="profile-image">
//         <img src={myImg} alt="Profile" />
//       </div>
//       <div className="profile-text">
//         <h1>Hi, I am Janmejay Pandya</h1>
//         <p>
//           Web Developer specializing in front-end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages and libraries including HTML5, React, Java, C/C++, JavaScript, Python, BeautifulSoup, CSS, MySQL. Strong background in project management and customer relations.
//         </p>
//       </div>
//     </div>
//     <About></About>
//     <Skills></Skills>
//     <Projects></Projects>
//     <Button></Button>
//     <Footer></Footer>
//   </>
// }

// export default Home;

import "../css/Home.css";
import myImg from "../assets/Jay_pic1.jpg";
import Nav from "./Nav.jsx";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Button from "./Button.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="profile-container">
          <div className="profile-image">
            <img src={myImg} alt="Profile" />
          </div>
          <div className="profile-text">
            <h1>Hi, I am Janmejay Pandya</h1>
            <p>
              Web Developer specializing in front-end development. Experienced
              with all stages of the development cycle for dynamic web projects.
              Well-versed in numerous programming languages and libraries including
              HTML5, React, Java, C/C++, JavaScript, Python, BeautifulSoup, CSS, MySQL.
              Strong background in project management and customer relations.
            </p>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="resume-btn">Resume</button>
            </a>
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Button />
        <Footer />
      </div>
    </>
  );
}

export default Home;
