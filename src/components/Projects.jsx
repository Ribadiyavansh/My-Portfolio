import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title text-center">My Projects</h2>
                <div className="section-subtitle text-center">
                    <p className="subtitle-lead">Check out my cloud-focused work.</p>
                    <p className="subtitle-text">I've worked on practical projects involving real deployments, automation,
                        and cloud infrastructure.</p>
                </div>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3 className="project-title">Placement Management System</h3>
                            <p className="project-desc">Web-based placement tracking platform with student profile
                                management, resume builder, and job application features.</p>

                            <div className="project-tags">
                                <span className="tech-badge"><i className="fa-brands fa-php"></i> PHP</span>
                                <span className="tech-badge"><i className="fa-solid fa-database"></i> MySQL</span>
                                <span className="tech-badge"><i className="fa-brands fa-html5"></i> HTML/CSS</span>
                            </div>
                        </div>

                        <div className="project-footer">
                            <a href="https://github.com/Ribadiyavansh/placementpro" target="_blank"
                                className="btn-card btn-website"><i className="fa-solid fa-globe"></i> Website</a>
                            <a href="https://github.com/Ribadiyavansh/placementpro" target="_blank"
                                className="btn-card btn-source"><i className="fa-brands fa-github"></i> Source</a>
                        </div>
                    </article>

                    {/* Project 2 */}
                    <article className="project-card">
                        <div className="project-content">
                            <h3 className="project-title">QuickBite</h3>
                            <p className="project-desc">Online food ordering UI featuring menu browsing, cart functionality,
                                and a smooth order placement flow.</p>

                            <div className="project-tags">
                                <span className="tech-badge"><i className="fa-brands fa-js"></i> JavaScript</span>
                                <span className="tech-badge"><i className="fa-solid fa-desktop"></i> Frontend</span>
                                <span className="tech-badge"><i className="fa-solid fa-layer-group"></i> UI/UX</span>
                            </div>
                        </div>

                        <div className="project-footer">
                            <a href="https://github.com/Ribadiyavansh/quickbite" target="_blank"
                                className="btn-card btn-website"><i className="fa-solid fa-globe"></i> Website</a>
                            <a href="https://github.com/Ribadiyavansh/quickbite" target="_blank"
                                className="btn-card btn-source"><i className="fa-brands fa-github"></i> Source</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
