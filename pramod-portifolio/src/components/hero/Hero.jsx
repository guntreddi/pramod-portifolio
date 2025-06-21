import React, { useEffect } from 'react';
import './Hero.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

// import resumePDF from '../assets/resume.pdf'; // Ensure resume is placed in assets

const Hero = () => {
  useEffect(() => {
  // AOS.init({ duration: 1000 });
}, []);


  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1>Hi, I'm <span>Thota Naga Venkata Pramod</span></h1>
          <h2>Data Analyst</h2>
          <p>
            Turning data into impactful insights using AI, ML, and visualization.
          </p>
          <div className="hero-links">
            <a href="mailto:tnvpramod12@gmail.com" target="_blank" rel="noopener noreferrer">📧 Email</a>
            <a href="https://github.com/tnv-pramod" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            <a href="http://www.linkedin.com/in/pramodanalyst" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          </div>
          {/* <a href={resumePDF} className="cta-btn" download>📄 Download Resume</a> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
