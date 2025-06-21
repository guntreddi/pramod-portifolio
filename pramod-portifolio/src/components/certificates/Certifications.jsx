import React from 'react';
import './Certifications.css';
// import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const certs = [
    {
      title: "Datavalley.ai",
      subtitle: "Data Analyst Intern",
    },
    {
      title: "Accenture",
      subtitle: "Data Analytics and Visualizations",
    },
    {
      title: "PwC",
      subtitle: "Power BI Certification",
    },
    {
      title: "EduSkills",
      subtitle: "Data Analytics Virtual Internship",
    },
    {
      title: "AWS",
      subtitle: "Machine Learning",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, index) => (
          <div className="cert-card" data-aos="fade-up" key={index}>
            <div className="cert-icon">🎓</div>
            <h3>{cert.title}</h3>
            <p>{cert.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
