import React from 'react';

const Footer = () => {
    return (
        <section id="contact" className="section footer-section text-center">
            <div className="container">
                <h2 className="section-title">Let's Connect</h2>
                <p className="footer-text">Feel free to reach out for collaborations or just a friendly hello!</p>
                <div className="social-dock">
                    <a href="mailto:vanshribadiya3@gmail.com" className="social-link" title="Email"><i
                        className="fa-solid fa-envelope"></i></a>
                    <a href="https://github.com/Ribadiyavansh" target="_blank" className="social-link" title="GitHub"><i
                        className="fa-brands fa-github"></i></a>
                    <a href="https://linkedin.com" target="_blank" className="social-link" title="LinkedIn"><i
                        className="fa-brands fa-linkedin"></i></a>
                    <a href="https://instagram.com" target="_blank" className="social-link" title="Instagram"><i
                        className="fa-brands fa-instagram"></i></a>
                </div>
                <p className="copyright">&copy; 2026 Ribadiya Vansh</p>
            </div>
        </section>
    );
};

export default Footer;
