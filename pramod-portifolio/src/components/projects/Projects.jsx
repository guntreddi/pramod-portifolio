import React, { useEffect } from 'react';
import './Projects.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Sales Report using SQL & Power BI",
      description: "Designed KPIs like Total Sales, Shipment Count, and Low Box % using SQL and Power BI. Created dynamic dashboards for real-time business decisions.",
      icon: "📊"
    },
    {
      title: "Hospitality Domain Dashboard",
      description: "Built ETL pipelines from multiple sources. Used Power BI and Excel with DAX for interactive dashboards. Conducted UAT and trained users.",
      icon: "🏨"
    },
    {
      title: "Amazon Sales Data Analysis",
      description: "Used Python (NumPy, Pandas, Scikit-learn) to clean data, perform EDA, and apply ML models for sales forecasting and customer segmentation.",
      icon: "📦"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-up">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" data-aos="zoom-in" key={index}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Optional link buttons below */}
            {/* <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer">🔗 Live</a>
              <a href="#" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
