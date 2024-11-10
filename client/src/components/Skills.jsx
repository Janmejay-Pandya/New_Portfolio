// import "../css/Skills.css";
// import c from "../assets/c.svg";
// import cpp from "../assets/c++.svg";
// import git from "../assets/git.svg";
// import java from "../assets/java.svg";
// import javascript from "../assets/javascript.svg";
// import mysql from "../assets/mysql.svg";
// import nodejs from "../assets/nodejs.svg";
// import python from "../assets/python.svg";
// import react from "../assets/react.svg";
// function Skills() {
//     return (
//         <div>
//             <div className="skills">
//                 <h1 className="sk">Skills
//                 </h1>
//                 <ul className="skill-list">
//                     <li><img src={c} alt="c" /></li>
//                     <li><img src={cpp} alt="cpp" /></li>
//                     <li><img src={git} alt="git" /></li>
//                     <li><img src={java} alt="java" /></li>
//                     <li><img src={javascript} alt="javascript" /></li>
//                     <li><img src={mysql} alt="mysql" /></li>
//                     <li><img src={nodejs} alt="nodejs" /></li>
//                     <li><img src={python} alt="python" /></li>
//                     <li><img src={react} alt="react" /></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Skills;


import "../css/Skills.css";
import c from "../assets/c.svg";
import cpp from "../assets/c++.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import javascript from "../assets/javascript.svg";
import mysql from "../assets/mysql.svg";
import nodejs from "../assets/nodejs.svg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";

function Skills() {
    return (
        <div className="skills-section">
            <h1 className="sk">Skills</h1>
            <ul className="skill-list">
                <li className="skill-item"><img src={c} alt="C" /></li>
                <li className="skill-item"><img src={cpp} alt="C++" /></li>
                <li className="skill-item"><img src={git} alt="Git" /></li>
                <li className="skill-item"><img src={java} alt="Java" /></li>
                <li className="skill-item"><img src={javascript} alt="JavaScript" /></li>
                <li className="skill-item"><img src={mysql} alt="MySQL" /></li>
                <li className="skill-item"><img src={nodejs} alt="Node.js" /></li>
                <li className="skill-item"><img src={python} alt="Python" /></li>
                <li className="skill-item"><img src={react} alt="React" /></li>
            </ul>
        </div>
    );
}

export default Skills;
