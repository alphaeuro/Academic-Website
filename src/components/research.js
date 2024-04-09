import React from 'react';
import './research.css';

// Sample data for research projects, you would replace this with actual data
const researchProjects = [
  {
    title: "Action Research with Community Participation",
    description: "Engaging community members in the research process to ensure that the development projects meet their needs and are sustainable in the long term.",
  },
  {
    title: "Science Society and Public Policy",
    description: "Analyzing how scientific research can directly inform public policies and contribute to societal development.",
  },
  // ... other projects
  // New project from the resume
  {
    title: "Green Urban Planning Environment and Biodiversity Conservation",
    description: "Advancing green urban planning initiatives and promoting biodiversity conservation through innovative research designs.",
  },
  // ... more projects
];

const Research = () => {
  return (
    <div className="research-container">
      <h1 className="research-header">Research Initiatives</h1>
      <div className="research-projects">
        {researchProjects.map((project, index) => (
          <div key={index} className="research-project">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
