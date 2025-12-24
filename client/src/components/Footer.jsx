import "../css/Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3 className="footer-title">Janmejay Pandya</h3>
                    <p className="footer-tagline">Building thoughtful, user-first experiences.</p>
                </div>
                <div className="footer-meta">
                    <p className="copyright">© {currentYear} Janmejay Pandya</p>
                    <p className="footer-note">Open to collaborations and new opportunities.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;