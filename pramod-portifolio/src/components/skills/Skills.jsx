import React, { useEffect } from 'react';
import './Skills.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      category: '🧠 Core Analytics & Tools',
      items: [
        { name: 'Excel', level: '90%' },
        { name: 'Power BI', level: '85%' },
        { name: 'MySQL & MongoDB', level: '80%' },
        { name: 'ETL & Dashboards', level: '75%' }
      ]
    },
    {
      category: '🧪 Machine Learning & Python',
      items: [
        { name: 'Python, NumPy, Pandas', level: '85%' },
        { name: 'Scikit-learn, Matplotlib', level: '80%' },
        { name: 'Streamlit, FastAPI', level: '75%' },
        { name: 'EDA & Forecasting', level: '80%' }
      ]
    },
    {
      category: '💡 Soft Skills',
      items: [
        { name: 'Problem Solving', level: '90%' },
        { name: 'Team Collaboration', level: '85%' },
        { name: 'Presentation', level: '80%' },
        { name: 'Adaptability', level: '85%' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills-wrapper">
        {skills.map((group, index) => (
          <div className="skills-category" data-aos="fade-up" key={index}>
            <h3>{group.category}</h3>
            {group.items.map((skill, i) => (
              <div className="skill-bar" key={i}>
                <span className="skill-name">{skill.name}</span>
                <div className="bar">
                  <div className="filled" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
