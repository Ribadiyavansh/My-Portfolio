import React from 'react';

const Education = () => {
    return (
        <div className="education-section" style={{ marginTop: '40px' }}>
            <h3 className="subsection-title">Education</h3>

            <div className="education-item">
                <div className="edu-header">
                    <div className="header-left">
                        <div className="company-logo">
                            <img src="/assets/atmiya_logo.png" alt="Atmiya University" className="logo-img" />
                        </div>
                        <div className="header-info">
                            <a href="https://atmiyauni.ac.in/" target="_blank" className="role-title hover-link"
                                style={{ textDecoration: 'none', color: 'var(--text-primary)' }}>Atmiya University</a>
                            <span className="company-name"
                                style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Bachelor
                                of Computer Applications (BCA)</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <span className="job-period">2021 - 2026</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
