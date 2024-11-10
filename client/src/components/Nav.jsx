import "../css/Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }
  function click() {
    navigate('/contact');
  }
  return (
    <div>
      <nav className="Nav-bar">
        <ul>
          <li className="Nav-items" onClick={handleClick}>Home</li>
          <li className="Nav-items" onClick={click}>Contact Me</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;


