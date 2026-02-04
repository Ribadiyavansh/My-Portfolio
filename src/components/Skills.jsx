import React from 'react';

const Skills = () => {
    return (
        <div id="skills" style={{ marginBottom: '40px', marginTop: '20px' }}>
            <h3 className="subsection-title">Skill</h3>
            <div className="stack-grid">
                <div className="stack-item stack-html"><i className="fa-brands fa-html5"></i> HTML5</div>
                <div className="stack-item stack-css"><i className="fa-brands fa-css3-alt"></i> CSS3</div>
                <div className="stack-item stack-js"><i className="fa-brands fa-js"></i> JavaScript</div>
                <div className="stack-item stack-php"><i className="fa-brands fa-php"></i> PHP</div>
                <div className="stack-item stack-git"><i className="fa-brands fa-git-alt"></i> Git</div>
            </div>
        </div>
    );
};

export default Skills;
