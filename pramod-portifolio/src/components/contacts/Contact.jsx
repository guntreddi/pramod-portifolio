import React, { useEffect } from 'react';
import './Contact.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import resumePDF from '../assets/resume.pdf'; // Add your resume here

const Contact = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 data-aos="fade-up">Contact Me</h2>
      <div className="contact-box" data-aos="fade-up">
        <div className="contact-item">
          <span>📧</span>
          <a href="mailto:tnvpramod12@gmail.com">tnvpramod12@gmail.com</a>
        </div>
        <div className="contact-item">
          <span>📞</span>
          <a href="tel:+919394348999">+91 93943 48999</a>
        </div>
        <div className="contact-links">
          <a href="https://github.com/tnv-pramod" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
          <a href="http://www.linkedin.com/in/pramodanalyst" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
        </div>
        {/* <a href={resumePDF} className="download-btn" download> */}
          {/* 📄 Download Resume */}
        {/* </a> */}
      </div>
    </section>
  );
};

export default Contact;
