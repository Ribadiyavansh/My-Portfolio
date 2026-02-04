import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container text-center">
                <div className="avatar-wrapper">
                    <img src="/assets/memoji_avatar_male.png" alt="Ribadiya Vansh" className="avatar" />
                </div>

                <h1 className="hero-title">
                    Hi, I'm Vansh <span className="wave">👋</span>
                </h1>

                <p className="hero-subtitle">
                    Entrepreneur & IT Developer
                </p>

                <div className="hero-cta">
                    <div className="hero-socials">
                        <a href="https://github.com/Ribadiyavansh" target="_blank" className="social-icon-link" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="social-icon-link" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="social-icon-link" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                    <div className="action-buttons">
                        <a href="#projects" className="btn btn-primary">Check out my work</a>
                        <a href="mailto:vanshribadiya3@gmail.com" className="btn btn-outline">Get in touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
