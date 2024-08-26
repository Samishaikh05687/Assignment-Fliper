import React, { useEffect, useState } from "react";
import "./OurProjects.css"; // Assuming you place your CSS in OurProjects.css

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/services", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.log(`projects frontend error:${error}`);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section className="our-projects-section">
      <div className="our-projects-container">
        <h2 className="our-projects-title">Our Projects</h2>
        <p className="our-projects-description">
          We know what buyers are looking for and suggest projects that will
          bring clients top collar for the sale of their homes.
        </p>
        <div className="our-projects-grid">
          {projects.map((project, index) => {
            const { projectdescription, projectimage, projectname } = project;

            return (
              <div key={index} className="project-card">
                <img
                  src={projectimage}
                  alt={projectname}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-name">{projectname}</h3>
                  <p className="project-description">{projectdescription}</p>
                  <button className="read-more-button">Read More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
