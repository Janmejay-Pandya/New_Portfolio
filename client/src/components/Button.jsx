import "../css/Button.css";
import { useNavigate } from "react-router-dom";
function Button() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/contact');
    }
    return (
        <div className="btn-container">
            <button className="contact-button" onClick={handleClick}>Connect With Me</button>
        </div>
    )
}

export default Button;