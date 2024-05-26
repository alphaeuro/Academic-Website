import React from 'react';
import './research.css';
import { useState } from 'react';
import yt from "../images/researchvideo.webp";


// Sample data for research projects, you would replace this with actual data
const researchProjects = [
  {
    title: "Action Research with Community Participation",
    description: "Engaging community members in the research process to ensure that the development projects meet their needs and are sustainable in the long term.",
    content: "The project focuses on involving community members actively in the research process. This approach ensures that development projects are not only tailored to the specific needs of the community but also sustainable over the long term by fostering local engagement and ownership. The project emphasizes a collaborative methodology where the insights and experiences of community members directly inform the research outcomes, leading to more effective and applicable solutions in community development .",
  },
  {
    title: "Science Society and Public Policy",
    description: "Analyzing how scientific research can directly inform public policies and contribute to societal development.",
    content: "The initiative investigates the complex interplay between scientific research and its implications for public policy and societal development. This project aims to show how scientific discoveries may be strategically used to educate and create policies that support sustainable development and social well-being by examining a variety of case studies. The program aims to build a more informed and proactive public policy landscape by highlighting the significance of interdisciplinary methods and active participation from diverse stakeholders to bridge the gap between scientific and societal requirements.",
  },
  // ... other projects
  // New project from the resume
  {
    title: "Green Urban Planning Environment and Biodiversity Conservation",
    description: "Advancing green urban planning initiatives and promoting biodiversity conservation through innovative research designs.",
    content: "The project coordinated by Dr. Somnath Ghosal, focuses on improving urban landscapes to enhance biodiversity conservation and sustainability. This unique program incorporates ecological concepts into urban design to produce greener, more resilient communities that not only improve residents' quality of life but also provide home for a variety of flora and wildlife. The initiative highlights the importance of research in establishing public policies that promote ecologically friendly urban environments, demonstrating a dedication to ecological and urban harmony.",
  },

  {
    title: "Drinking Water Facility Development for Gopali High School, Kharagpur",
    description: "This project, funded by Metalik Fuel Pvt. Ltd. in 2022-2023, focused on developing drinking water facilities to improve access to potable water in schools.",
    content: "This critical initiative, launched in 2022-2023 and generously financed by Metalik Fuel Pvt. Ltd., intended to transform access to safe drinking water at Gopali High School in Kharagpur. By adding cutting-edge drinking water facilities, the program not only improved students' daily water consumption experiences, but also highlighted the importance of health and wellbeing in educational settings. This commitment to sustainability and community well-being illustrates our passion to making life better via innovation.",
  },

  {
    title: "Adoption of Technology-Oriented Drinking Water Facilities in Rural India",
    description: "Funded by ISIRD IIT Kharagpur from 2017 to 2020, this project looked at technological solutions to improve drinking water access in rural areas.",
    content: "In this pioneering initiative funded by ISIRD, IIT Kharagpur from 2017 to 2020, Dr. Somnath Ghosal led the deployment of technology-driven solutions to enhance drinking water accessibility in India's rural sectors. This project focused on installing advanced water purification systems tailored to the unique challenges of rural environments. Emphasizing sustainability, the endeavor not only sought to provide clean water but also to integrate community involvement and education, ensuring a long-term impact on the health and well-being of rural populations. This strategic approach highlights a commitment to leveraging technology for societal advancement and sustainable development.",
  },

  {
    title: "Exploring Biodiversity Knowledge through NTFP Cultivation in City Parks",
    description: "Conducted from 2016 to 2018 and funded by ICSSR New Delhi, the project explored non-timber forest products (NTFPs) as a means to enhance biodiversity knowledge in urban parks.",
    content: "This pivotal project, led by Dr. Somnath Ghosal, dives into the cultivation of Non-Timber Forest Products (NTFPs) within urban parklands to enhance biodiversity knowledge and conservation. Spanning 2016 to 2018 and generously funded by ICSSR New Delhi, the initiative aimed to integrate ecological sustainability with urban green spaces, thereby transforming city parks into vibrant ecosystems that educate and engage the public in biodiversity conservation. This innovative approach not only enriched local biodiversity but also served as an educational tool to foster community involvement and awareness about environmental stewardship.",
  },
  
];

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);
 
  return (
    // <div className="research-container">
    //   <h1 className="research-header">Research Initiatives</h1>
    //   <div className="research-projects">
    //     {researchProjects.map((project, index) => (
    //       <div key={index} className="research-project">
    //         <h2 className="project-title">{project.title}</h2>
    //         <p className="project-description">{project.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="research-page">
      <div className="research-container">
         <h1 className="research-header">Qualitative and Archival Research</h1> 
        <div className="research-projects">
          {researchProjects.map((project, index) => (
            <div key={index} className="research-project" onClick={() => setSelectedProject(project)}>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="project-information">
        {selectedProject ? (
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.content}</p>
          </div>
        ) : (
          <h4>Dr. Somnath Ghosal's extensive research at the Indian Institute of Technology Kharagpur delves into the intricate relationship between community participation and sustainable development. His work prominently focuses on integrating community insights into the development of rural infrastructures like education, health services, and drinking water systems. His innovative approach in green urban planning and biodiversity conservation showcases a commitment to enhancing environmental sustainability through action-oriented research. Dr. Ghosal's projects are a testament to the pivotal role that informed scientific research plays in shaping effective public policy and advancing societal progress.<br></br><br></br> <br></br><br></br><br></br>Click on the projects to know more.</h4>
        )}
      </div>
      
      </div>
    
  );
};


export default Research;
