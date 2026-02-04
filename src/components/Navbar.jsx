import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        // Intersection Observer for Active Link Highlighting
        const sections = document.querySelectorAll('section, div[id="skills"]'); // Added skills just in case, though it's inside About
        const root = null; // Defined explicitly to fix potential reference issue

        // Create an observer that updates activeTab when a section is in view
        const observerOptions = {
            root,
            rootMargin: '-30% 0px -70% 0px', // Trigger when section is near top of viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check if it's the skills subsection which counts as 'skills' tab
                    if (entry.target.id === 'skills') {
                        setActiveTab('skills');
                    } else {
                        setActiveTab(entry.target.id);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            if (sections) {
                sections.forEach(section => observer.unobserve(section));
            }
        };
    }, []);

    // Smooth scroll handler
    const handleNavClick = (e, id) => {
        e.preventDefault();
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="dock-nav">
            <ul className="dock-list">
                <li>
                    <a href="#home"
                        className={`dock-link ${activeTab === 'home' ? 'active' : ''}`}
                        title="Home"
                        onClick={(e) => handleNavClick(e, 'home')}>
                        <i className="fa-solid fa-house"></i>
                    </a>
                </li>
                <li>
                    <a href="#about"
                        className={`dock-link ${activeTab === 'about' ? 'active' : ''}`}
                        title="About"
                        onClick={(e) => handleNavClick(e, 'about')}>
                        <i className="fa-solid fa-user"></i>
                    </a>
                </li>
                <li>
                    <a href="#skills"
                        className={`dock-link ${activeTab === 'skills' ? 'active' : ''}`}
                        title="Skill"
                        onClick={(e) => handleNavClick(e, 'skills')}>
                        <i className="fa-solid fa-layer-group"></i>
                    </a>
                </li>
                <li>
                    <a href="#projects"
                        className={`dock-link ${activeTab === 'projects' ? 'active' : ''}`}
                        title="Projects"
                        onClick={(e) => handleNavClick(e, 'projects')}>
                        <i className="fa-solid fa-code"></i>
                    </a>
                </li>
                <li>
                    <a href="#contact"
                        className={`dock-link ${activeTab === 'contact' ? 'active' : ''}`}
                        title="Contact"
                        onClick={(e) => handleNavClick(e, 'contact')}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </li>
                <li style={{ borderLeft: '1px solid var(--dock-border)', paddingLeft: '8px', marginLeft: '8px' }}>
                    <button
                        onClick={toggleTheme}
                        className="dock-link"
                        title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                    >
                        {theme === 'light' ? (
                            <i className="fa-solid fa-moon"></i>
                        ) : (
                            <i className="fa-solid fa-sun"></i>
                        )}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
