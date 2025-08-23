import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate full stack developer with experience in building robust and user-friendly web applications. I have a strong understanding of both frontend and backend development and a problem-solving mindset. I am proficient in Java, Spring Boot, HTML, CSS, JavaScript, and databases such as MySQL.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Developer</h2>
                        <p>A full stack developer is skilled in both front-end and back-end technologies, capable of building complete web applications from design to deployment.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Developer</h2>
                        <p>Passionate about designing and building efficient software solutions. Skilled in turning ideas into reliable, user-friendly applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Developer</h2>
                        <p>Creative and detail-oriented professional specializing in building responsive, user-friendly websites. Skilled in both front-end and back-end development to deliver seamless digital experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;