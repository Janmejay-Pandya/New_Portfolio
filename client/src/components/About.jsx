import { useEffect, useRef } from "react";
import wrk_img from "../assets/download.png";
import mysvg from "../assets/right2.png";
import "../css/About.css";

function About() {
  const workExpRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (workExpRef.current) observer.observe(workExpRef.current);
    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (workExpRef.current) observer.unobserve(workExpRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <p className="eyebrow">Background</p>
          <h1 className="section-title">Experience & Education</h1>
          <p className="section-subtitle">
            Blending product-focused engineering with a love for clean UX, performance, and shipping reliable features end-to-end.
          </p>
        </div>

        <div className="about-stack">
          <div className="panel work-panel">
            <div className="panel-heading">
              <h2>Work Experience</h2>
              <span className="pill">Internship</span>
            </div>
            <div ref={workExpRef} className="work-experience-container">
              <a href="https://craftlab.ai/" target="_blank" rel="noopener noreferrer" className="work-link">
                <div className="work-card">
                  <div className="work-card-left">
                    <div className="work-logo-container">
                      <img className="work-logo" src={wrk_img} alt="Meta CraftLab Logo" />
                    </div>
                  </div>

                  <div className="work-card-content">
                    <h3 className="company-name">Meta CraftLab</h3>
                    <p className="job-role">Product Engineering Intern</p>
                    <div className="job-duration">
                      <span className="duration-icon">🗓️</span>
                      <span className="duration-text">June 2024 - July 2024</span>
                    </div>
                    <ul className="bullet-points">
                      <li>Developed and deployed RESTful APIs and scalable backend services with SvelteKit and MongoDB.</li>
                      <li>Improved workflow automation and debugging processes, increasing system efficiency by 15%.</li>
                      <li>Collaborated with the team to implement new features and improve the overall user experience.</li>
                    </ul>
                  </div>

                  <div className="work-card-right">
                    <img className="arrow-icon" src={mysvg} alt="arrow icon" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="panel education-panel">
            <div className="panel-heading">
              <h2>Education</h2>
              <span className="pill pill-amber">B.Tech</span>
            </div>

            <div ref={educationRef} className="education-container">
              <div className="education-card">
                <div className="education-card-content">
                  <h3 className="university-name">Symbiosis Institute of Technology, Pune</h3>
                  <p className="degree-name">B.Tech Computer Science</p>
                  <div className="education-duration">
                    <span className="duration-icon">🎓</span>
                    <span className="duration-text">2022 - 2026</span>
                  </div>
                  <ul className="bullet-points">
                    <li>Focused on Computer Science fundamentals, Programming, Data
                      Structures & Algorithms and Operating Systems.</li>
                    <li>Active in building side projects, learning new technologies and participating in various College Events.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;