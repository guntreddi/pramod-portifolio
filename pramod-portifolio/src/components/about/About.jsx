import React, { useEffect } from 'react';
import './About.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';
// import resumePDF from '../assets/resume.pdf';
// import profileImg from '../assets/profile.jpg'; // Optional profile image

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container" data-aos="fade-up">
        <div className="about-img">
          {/* Uncomment if image is available */}
          {/* <img src={profileImg} alt="Pramod Profile" /> */}
          <div className="placeholder-img">👨‍💻</div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a B.Tech graduate in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning. I bring hands-on experience in data analysis, API integration, Power BI, Excel, SQL, and machine learning using Python.
          </p>
          <p>
            I love transforming raw data into meaningful insights. My work includes dashboards, forecasting, automation, and interactive reporting. I’m always driven to learn, adapt, and innovate in fast-paced tech environments.
          </p>
          <p>
            Currently exploring advanced AI tools and big data solutions to empower businesses with intelligent decisions.
          </p>
          {/* <a href={resumePDF} className="about-resume-btn" download> */}
            {/* 📄 Download Resume */}
          {/* </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
