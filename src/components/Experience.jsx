import React, { useState, useRef, useEffect } from 'react';

const Experience = () => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    const toggleAccordion = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (expanded) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [expanded]);

    return (
        <div className="experience-accordion">
            <h3 className="subsection-title">Work Experience</h3>

            <div className="accordion-item" data-expanded={expanded}>
                <div className="accordion-header" onClick={toggleAccordion}>
                    <div className="header-left">
                        <div className="company-logo">
                            <img src="/assets/simform_logo.webp" alt="Simform" className="logo-img" />
                        </div>
                        <div className="header-info inline-header">
                            <div className="title-group">
                                <h4 className="role-title">Frontend Developer</h4>
                                <i className="fa-solid fa-chevron-down toggle-icon"></i>
                            </div>
                            <span className="location-text">Ahmedabad</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <span className="job-period">April 2025 - June 2025</span>
                    </div>
                </div>

                <div
                    className="accordion-content"
                    style={{ maxHeight: height }}
                    ref={contentRef}
                >
                    <div className="content-inner">
                        <p className="company-bio">Simform is a digital engineering and software development
                            company. It helps businesses build scalable digital products and provides agile
                            teams to extend development capabilities.</p>
                        <p>Worked on UI development, web components, and collaborated with the team to deliver
                            high-quality web interfaces.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
