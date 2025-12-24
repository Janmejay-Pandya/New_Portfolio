import "../css/Projects.css";
import gp from "../assets/github.png";
import md from "../assets/medledger.png"
import qc from "../assets/chat.png";
import nb from "../assets/notionBot.png";
import ww from "../assets/wealthwise.png";

function Projects() {
    const projects = [
        {
            name: "WealthWise - Pension Benefit Optimizer",
            description: "An AI-assisted, privacy-first platform that helps retirees and near-retirees maximize their lifetime pension benefits through smart scenario modeling, optimization, and plain-language guidance.",
            tech: ["React.js", "Django", "PostgreSQL", "LangChain", "RAG", "FastAPI", "XGBoost", "Scikit - Learn", "Python"],
            link: "https://github.com/Janmejay-Pandya/WealthWise",
            image: ww
        },
        {
            name: "Medledger - Decentralized Health Data System",
            description: "MedLedger is a decentralized healthcare data management platform that leverages blockchain and distributed storage to ensure secure, tamper-resistant medical records. Built on Ethereum with smart contracts and decentralized identity, it enables fast, role-based access to health data while significantly improving trust, integrity, and verification efficiency.",
            tech: ["React.js", "Blockchain", "Ethereum", "IPFS", "Solidity", "Web3.js"],
            link: "https://github.com/Janmejay-Pandya/healthcare-blockchain",
            image: md
        },
        {
            name: "Notion AI Agent — Smart Note & Task Creator",
            description: "This project is an AI-powered Notion Assistant built with LangGraph, Gemini (Google Generative AI), and the Notion API. It allows you to create beautifully structured notes, checklists, and tables directly in Notion — just by typing natural language prompts into a sleek React + Tailwind UI.",
            tech: ["Python", "FastAPI", "LangGraph", "LangChain", "React.js", "Notion API", "LLM"],
            link: "https://github.com/Janmejay-Pandya/Notion-Bot",
            image: nb
        },
        {
            name: "QuickChat: Real-Time Chat Application",
            description: "This project is designed to provide real-time communication between users through an intuitive and feature-rich chat interface. Built with modern technologies, the application ensures a seamless user experience, robust performance, and secure communication.",
            tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
            link: "https://github.com/Janmejay-Pandya/Chat-Application",
            image: qc
        },
    ];

    return (
        <div className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <p className="eyebrow">Selected Work</p>
                    <h1 className="prj-title">Projects</h1>
                    <p className="prj-subtitle">
                        A mix of full-stack builds and experiments focused on resilient UX, performance, and clean deployment pipelines.
                    </p>
                </div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-top">
                                <span className="project-pill">Featured</span>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <img className="git" src={gp} alt="GitHub" /> View Repo
                                </a>
                            </div>

                            <div className="project-image-container">
                                <img src={project.image} alt={project.name} className="project-image" />
                                <div className="project-overlay">
                                    <span className="overlay-text">Hover to peek</span>
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