// import "../css/Projects.css"
// import gp from "../assets/github.png";
// function Projects() {
//     return (
//         <div>
//             <div className="projects">
//                 <h1 className="prj"> Projects</h1>
//                 <ul className="prj-items">
//                     <li>1. Cafe Order Management System:<a href="https://github.com/Janmejay-Pandya/Cafe-Order-Management-System"> <button> <img className="git" src={gp} alt="" /> Source</button></a>
//                         <br />
//                         This Project was
//                         created using JAVA which has various
//                         functionalities.
//                     </li>
//                     <li>2. Demographic Surface Water Mapping:<a href="https://github.com/Janmejay-Pandya/Demographic_Water_Surface_Mapping"><button> <img className="git" src={gp} alt="" /> Source</button></a>
//                         <br />
//                         Used for
//                         predicting future land and water patterns providing
//                         valuable insights for sustainable planning and
//                         conservation efforts.

//                     </li>
//                     <li>3. Web development:<a href="https://github.com/Janmejay-Pandya?tab=repositories"><button> <img className="git" src={gp} alt="" /> Source</button></a>
//                         <br />
//                         Built some projects for web
//                         development like Roll the Dice, To-do list,
//                         calculator etc.

//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Projects;

import "../css/Projects.css";
import gp from "../assets/github.png";
import cm from "../assets/cafe_management.jpg";
import dm from "../assets/demographic.png";
import roll from "../assets/roll_the_dice.png";

function Projects() {
    const projects = [
        {
            name: "Cafe Order Management System",
            description: "This Project was created using JAVA which has various functionalities.",
            tech: ["Java", "Swing", "JDBC"],
            link: "https://github.com/Janmejay-Pandya/Cafe-Order-Management-System",
            image: cm
        },
        {
            name: "Demographic Surface Water Mapping",
            description: "Used for predicting future land and water patterns providing valuable insights for sustainable planning and conservation efforts.",
            tech: ["Python", "Data Analysis", "GIS"],
            link: "https://github.com/Janmejay-Pandya/Demographic_Water_Surface_Mapping",
            image: dm
        },
        {
            name: "Web Development",
            description: "Built some projects for web development like Roll the Dice, To-do list, calculator etc.",
            tech: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://github.com/Janmejay-Pandya?tab=repositories",
            image: roll
        }
    ];

    return (
        <div className="projects">
            <h1 className="prj-title">Projects</h1>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h2 className="project-name">{project.name}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, techIndex) => (
                                <span className="tech-badge" key={techIndex}>{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="source-button">
                                <img className="git" src={gp} alt="GitHub" /> Source
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
