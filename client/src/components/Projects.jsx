import "../css/Projects.css";
import gp from "../assets/github.png";
import cm from "../assets/cafe_management.jpg";
import quiz from "../assets/quiz.png";
import qc from "../assets/chat.png";
import cl from "../assets/class.png";

function Projects() {
    const projects = [
        {
            name: "Chat Application: QuickChat",
            description: "This project is designed to provide real-time communication between users through an intuitive and feature-rich chat interface. Built with modern technologies, the application ensures a seamless user experience, robust performance, and secure communication.",
            tech: ["React", "Javascript", "Tailwind", "Web Socket", "Express js", "MongoDb"],
            link: "https://github.com/Janmejay-Pandya/Chat-Application",
            image: qc
        },
        {
            name: "Quiz App",
            description: "A dynamic quiz application built with React that features an engaging user interface, power-ups, scoring system and a different result page if all the answers are correct and another one if some questions are wrong.",
            tech: ["Tailwind", "JavaScript", "React"],
            link: "https://github.com/Janmejay-Pandya/Quiz_App",
            image: quiz
        },
        {
            name: "Classroom Management System",
            description: "This project provides an efficient solution for managing classroom activities, student performance, attendance tracking, and communication between teachers and students. Built with a focus on usability, it is designed to streamline the administrative tasks within an educational environment.",
            tech: ["JavaScript", "React", "Node js", "Express js", "MongoDb"],
            link: "https://github.com/Janmejay-Pandya/Quiz_App",
            image: cl
        },
        {
            name: "Cafe Order Management System",
            description: "This Project was created using JAVA which has various functionalities.",
            tech: ["Java", "Swing", "JDBC"],
            link: "https://github.com/Janmejay-Pandya/Cafe-Order-Management-System",
            image: cm
        }
    ];

    return (
        <div className="projects">
            <div className="projects-container">
                <h1 className="prj-title">My Projects</h1>
                <div className="projects-divider">
                    <span></span>
                </div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.name} className="project-image" />
                                <div className="project-overlay">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                                        <img className="git" src={gp} alt="GitHub" /> View Source
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h2 className="project-name">{project.name}</h2>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span className="tech-badge" key={techIndex}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;