import React from 'react';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container small-container">
                <h2 className="section-title">About</h2>
                <div className="prose">
                    <p>I'm a problem solver and an aspiring Entrepreneur with a strong developer mindset. I specialize
                        in building web based solutions and have a keen interest in modern technologies.</p>
                    <p>My journey involves constant learning, experimenting with code, and turning ideas into functional
                        reality.</p>
                </div>

                <Skills />
                <Experience />
                <Education />
            </div>
        </section>
    );
};

export default About;
