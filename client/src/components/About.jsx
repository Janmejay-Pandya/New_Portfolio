// import wrk_img from "../assets/download.png";
// import "../css/About.css";
// import mysvg from "../assets/right2.png"
// function About() {
//   return (
//     <div className="container">
//       <h1 className="wk">Work Experience</h1>
//       <a href="https://craftlab.ai/">
//         <div className="work_exp">
//           <img className="work-img" src={wrk_img} alt="img" />
//           <div className="desc">
//             <p className="company-name">Meta CraftLab</p>
//             <p className="role">Internship</p>
//             <p className="duration">June 2024-July 2024</p>
//             <img className="arrow" src={mysvg} alt="arrow" />
//           </div>
//         </div>
//       </a>
//     </div>
//   )
// }

// export default About;

import wrk_img from "../assets/download.png";
import "../css/About.css";
import mysvg from "../assets/right2.png";

function About() {
  return (
    <div className="container">
      <h1 className="wk">Work Experience</h1>
      <a href="https://craftlab.ai/" target="_blank" rel="noopener noreferrer" className="work-link">
        <div className="work-exp">
          <img className="work-img" src={wrk_img} alt="Meta CraftLab Logo" />
          <div className="desc">
            <p className="company-name">Meta CraftLab</p>
            <p className="role">Internship</p>
            <p className="duration">June 2024 - July 2024</p>
          </div>
          <img className="arrow" src={mysvg} alt="arrow icon" />
        </div>
      </a>

      <div className="education">
        <h2 className="education-heading">Education</h2>
        <div className="edu-details">
          <p className="university">Symbiosis Institute of Technology, Pune</p>
          <p className="degree">B.Tech Computer Science</p>
          <p className="edu-duration">2022 - 2026</p>
        </div>
      </div>
    </div>
  );
}

export default About;
