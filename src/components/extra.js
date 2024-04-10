import React from 'react';
import './Publications.css'; // Import CSS file for styling

const Publications = () => {
  return (
    <div className="pub-container">
      {/* Container for the image and text side by side */}
      <div className="image-and-text-pub-container">
        <div className="image-pub-container">
          <img src="https://source.unsplash.com/NXiIVnzBwZ8" alt="Jane Writer" className="pub-image" />
        </div>
        <div className="text-pub-container">
          <h3>Author of Sustainable Forestry: People, Culture and Economics<br/>ISBN: 978-81-910382-9-3<br/>L. G. Publishers Distributors, New Delhi, (2013)</h3>
        </div>
      </div>
      <div className="publi-section">
        <br/>
        <h2>Rural Livelihoods Management and Public Policy:</h2>
        <div className="publi-content">
          <h3>1. Goswami, T. and Ghosal, S. (2022)</h3>
          <p>From Rice Fields to Brackish Water Farms: Changing Livelihoods in Agrarian Coastal Bengal, India. <br/>Asia-Pacific Journal of Regional Science. Vol. 6 (2), p. 453 - 484. <br/>DOI: 10.1007/s41685-022-00229-8.</p>
          <h3>2. Ghosh M, Ghosal S. (2021)</h3>
          <p>Multidimensional Rural Livelihoods in Indian Sub-Himalaya: Regional Analysis, Households Well-Being and Its Determinants. <br/>International Journal of Rural Management, Vol. 19, p. 45 - 63.<br/> DOI:10.1177/09730052211047639.</p>
          <h3>3. Ghosh, M. and Ghosal, S. (2021)</h3>
          <p>Household's Choices and Their Drivers to Rural Non-Farm Livelihood Diversification in West Bengal, India. <br/>Journal of Asian and African Studies, Vol. 57, p. 1158 - 1178. <br/>DOI: 10.1177/00219096211040592.</p>
          <h3>4. Ghosh, M. and Ghosal, S. (2019)</h3>
          <p>Living With Insecurity: A Critical Examination of the Environmental Problems Linked with Social Problems in Rural West Bengal, India. <br/>Romanian Journal of Geography, Vol. 63 (1), p. 53 - 64.</p>
          <h3>5. Ghosal, S. (2013)</h3>
          <p>Soft or Hard: Infrastructure Matters Rural Economic Empowerment. <br/>Journal of Infrastructure Development (Sage, ISSN: 0974-9306, eISSN: 0975-5969), Vol. 5 (2), p. 137 - 149.</p>
          <h3>6. Ghosal, S. (2012)</h3>
          <p>Integral Economics and the Exploration of Indigenous Knowledge. <br/>Corvinus Journal of Sociology and Social Policy (Corvinus University of Budapest, ISSN: 2062-087X), Vol. 3 (2), p. 83 – 105.</p>
          <h3>Item 5: Title</h3>
          <p>Description of Item 5.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Publications;
