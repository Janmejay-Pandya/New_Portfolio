import "../css/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Janmejay Pandya</h3>
                </div>
                <p className="copyright">© {currentYear} Janmejay Pandya. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;