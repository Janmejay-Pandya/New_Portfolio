import React, { useEffect, useRef } from "react";
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
    <div className="about-container">
      <div className="about-content">
        <h1 className="section-title">Work Experience</h1>

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
                <p className="job-role">Internship</p>
                <div className="job-duration">
                  <span className="duration-icon">🗓️</span>
                  <span className="duration-text">June 2024 - July 2024</span>
                </div>
              </div>

              <div className="work-card-right">
                <img className="arrow-icon" src={mysvg} alt="arrow icon" />
              </div>
            </div>
          </a>
        </div>

        <h2 className="section-title education-title">Education</h2>

        <div ref={educationRef} className="education-container">
          <div className="education-card">
            <div className="education-card-content">
              <h3 className="university-name">Symbiosis Institute of Technology, Pune</h3>
              <p className="degree-name">B.Tech Computer Science</p>
              <div className="education-duration">
                <span className="duration-icon">🎓</span>
                <span className="duration-text">2022 - 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;