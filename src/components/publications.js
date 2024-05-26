import React from 'react';
import './Publications.css'; // Import CSS file for styling

const Publications = () => {
  return (
    <div className="pub-container">
      {/* Container for the image and text side by side */}
      <div className="image-and-text-pub-container">
        
        {/* <div className="text-pub-container">
          <h3>Author of Sustainable Forestry: People, Culture and Economics<br/>ISBN: 978-81-910382-9-3<br/>L. G. Publishers Distributors, New Delhi, (2013)</h3>
        </div> */}
      </div>
      <div className="publi-section">
        <br/>
        <h1>Journal:</h1>
        <div className="publi-content">
          <h2>Rural Livelihoods Management and Public Policy:</h2>
          <br></br>
            <ul>
              <li>Goswami, T. and Ghosal, S. (2022). From Rice Fields to Brackish Water Farms: Changing Livelihoods in Agrarian Coastal Bengal, India. Asia-Pacific Journal of Regional Science. Vol. 6 (2), p. 453 – 484. DOI: 10.1007/s41685-022-00229-8.</li>
              <li>Ghosh M, Ghosal S. (2021). Multidimensional Rural Livelihoods in Indian Sub-Himalaya: Regional Analysis, Households Well-Being and Its Determinants. International Journal of Rural Management, Vol. 19, p. 45 - 63. DOI: 10.1177/09730052211047639.</li>
              <li>Ghosh, M. and Ghosal, S. (2019). Living With Insecurity: A Critical Examination of the Environmental Problems Linked with Social Problems in Rural West Bengal, India. Romanian Journal of Geography, Vol. 63 (1), p. 53 - 64.</li>
              <li>Ghosal, S. (2013). Soft or Hard: Infrastructure Matters Rural Economic Empowerment. Journal of Infrastructure Development (Sage, ISSN: 0974-9306, eISSN: 0975-5969), Vol. 5 (2), p. 137 – 149.</li>
              <li>Ghosal, S. (2012). Integral Economics and the Exploration of Indigenous Knowledge. Corvinus Journal of Sociology and Social Policy (Corvinus University of Budapest, ISSN: 2062-087X), Vol. 3 (2), p. 83 – 105.</li>
              <li>Ghosal, S. (2007). Contents of Economic Geography: An Interdisciplinary Approach. Geographical Review of India (ISSN: Print 0375-6386), Vol. 69 (3), p. 293 – 298.</li>
            </ul>
          <h2>Community Water Planning:</h2>
          <br></br>
            <ul>
              <li>Goswami, T. and Ghosal, S. (2023). Proposing Civil Structures for Managed Aquifer Recharge in Relevant Sites of Shilabati River: An Integrated Spatial Analysis. Environmental Earth Sciences, Vol. 82. DOI: 10.1007/s12665-023-11033-8.</li>
              <li>Ghosal, S. and Ruj, C. (2023). Societal Impact Analysis of Community Managed Potable Water Supply System in Rural India. Journal of Applied Social Science. Vol. 17 (1), p. 148 – 167. DOI: 10.1177/19367244221119140.</li>
              <li>Goswami, T. and Ghosal, S. (2022). Examining the Groundwater Level in a Semi-arid District of Eastern India: Spatiotemporal Trends, Determinants, and Future Prospects. Environment, Development and Sustainability, Vol. 25, p. 10929 - 10953. DOI: 10.1007/s10668-022-02512-2.</li>
              <li>Ruj, C., Majumdar, A. and Ghosal, S. (2022). Political Ecology and Hydro-social Relation: A Study on Drought and Associated Migration in a Semi-arid District of West Bengal, India. Letters in Spatial and Resource Sciences. Vol. 15, p. 709 – 734. DOI: 10.1007/s12076-022-00321-9.</li>
              <li>Goswami, T. and Ghosal, S. (2022). Understanding the Suitability of Two MCDM Techniques in Mapping the Groundwater Potential Zones of Semi-arid Bankura District in Eastern India. Groundwater for Sustainable Development, Vol. 17. DOI: 10.1016/j.gsd.2022.100727.</li>
              <li>Porley, V., Chatzisymeon, E., Meikap, B.C., Ghosal, S., Robertson, N. (2020). Field Testing of Low-cost Titania-based Photocatalysts for Enhanced Solar Disinfection (SODIS) in Rural India. Environmental Science: Water Research and Technology (Royal Society of Chemistry, London), 2020, 6, p. 809 - 816. DOI: 10.1039/C9EW01023H.</li>
            </ul>
          <h2>Public Health and Policy:</h2>
          <br></br>
            <ul>
              <li>Hasan, S. M. and Ghosal, S. (2023). Gender Differentials in the Choice of In-patient Healthcare Services among the Older Adults in India: A Cross-Sectional Study. The International Journal of Health Planning and Management, Vol. 38 (5), p. 1464 – 1482. DOI: 10.1002/hpm.3673.</li>
              <li>Hasan, S. M. and Ghosal, S. (2023). Informal Plastic Waste Recycling Firms in Rural Eastern India: Implications for Livelihood and Health. Clinical Epidemiology and Global Health, Vol. 21.</li>
            </ul>
          <h2>Social Forestry, and Biodiversity Conservation:</h2>
          <br></br>
            <ul>
              <li>Ghosal, S. and Goswami, T. (2024). Community Forest Dependency: Re-examining Established Thoughts with Empirical Evidence from Eastern India. European Journal of Forest Research. DOI: 10.1007/s10342-024-01659-z.</li>
              <li>Ghosal, S., Majumdar, A., and Ruj, C. (2023). Reconnecting Humans with Nature: A Nature‐based Participatory Approach for the Enhancement of Biodiversity Knowledge in Urban Area of West Bengal, India. GeoJournal, Vol. 88, p. 4537 – 4554. DOI: 10.1007/s10708-023-10880-z.</li>
              <li>Ghosh, M. and Ghosal, S. (2019). Historical Geography of Forestry and Forest Culture in the Sub-Himalayan West Bengal (1757 – 2015). Space and Culture, India, Vol. 6 (5), p. 215 – 227.</li>
              <li>Ghosal, S. and Liu, J. (2018). The Chronology of Community Participation in Indian Forest Management. International Forestry Review (Commonwealth Forestry Association, Online ISSN: 2053-7778), Vol. 20 (1), p. 79 – 88.</li>
              <li>Ghosal, S. and Liu, J. (2017). Community Forest Dependency: Does Distance Matter? The Indian Forester (ISSN No. 0019-4816, Online ISSN: 2321-094X), Vol. 143 (5), p. 397 - 404.</li>
              <li>Ghosal, S. (2014). The Significance of the Non-Timber Forest Products Policy for Forest Ecology Management: A Case Study in West Bengal, India, Environmental Policy and Governance (John Wiley & Sons, Ltd., Online ISSN: 1756-9338), Vol. 24 (2), p. 108 – 121.</li>
              <li>Ghosal, S. (2011). Pre-colonial and Colonial Forest Culture in the Presidency of Bengal. Human Geographies (University of Bucharest, ISSN: print 1843-6587, online 2067-2284), Vol. 5 (1), p. 107 – 116.</li>
              <li>Ghosal, S. (2011). Importance of Non-timber Forest Products in Native Household Economy. Journal of Geography and Regional Planning, Vol. 4, p. 159-168.</li>
            </ul>
          <h2>Environment, Climate Change Vulnerability, and Adaptation:</h2>
          <br></br>
            <ul>
              <li>Ghosh, M. and Ghosal, S. (2023). Geographies of Vulnerability to Climate Change: Empirical Evidence from the Indian Himalayan Foothills. Asia-Pacific Journal of Regional Science, Vol. 7, p. 405 – 431. DOI: 10.1007/s41685-022-00273-4.</li>
              <li>Majumdar, A., Ghosal, S., Ruj, C. and Sen, A. (2023). Why Efforts to Address India’s ‘Just Transition’ Should Support Nature-Based Solutions. Energy Research and Social Science. Vol. 98. DOI: 10.1016/j.erss.2023.103021.</li>
              <li>Ghosh, M. and Ghosal, S. (2021). Climate Change Vulnerability of Rural Households in Flood-prone Areas of Himalayan Foothills, West Bengal, India. Environment, Development and Sustainability, Vol. 23, p. 2570 - 2595.</li>
              <li>Ghosh, M. and Ghosal, S. (2021). India's Domestic Climate Policy: Past, Present and Future Strategies. Annals of the National Association of Geographers, India (Delhi School of Economics, ISSN: 0970-972X), Vol. 41 (1), p. 156 – 175.</li>
              <li>Ghosh, M. and Ghosal, S. (2020). Determinants of Household Livelihood Vulnerabilities to Climate Change in the Himalayan Foothills of West Bengal, India. International Journal of Disaster Risk Reduction, Vol. 50. DOI: 10.1016/j.ijdrr.2020.101706. </li>
            </ul>
          <h2>Regional Planning:</h2>
          <br></br>
            <ul>
              <li>Chakraborty, P. and Ghosal, S. (2024). An Eco-social Exploration of Tourism Area Evolution in Mountains through Stakeholders’ Perspective. Environmental Development, Vol. 49. DOI: 10.1016/j.envdev.2024.100963.</li>
              <li>Chakraborty, P. and Ghosal, S. (2022). Status of Mountain-Tourism and Research in the Indian Himalayan Region: A Systematic Review. Asia-Pacific Journal of Regional Science. Vol. 6 (3), p. 863 – 897.  DOI: 10.1007/s41685-022-00243-w.</li>
              <li>Goswami, T., Hasan, M. S. and Ghosal, S. (2022). Site Suitability of Emerging Maize Cultivation in a Changing Agro-climatic Setting of Eastern India: A Fuzzy-MCE Integrated Analysis. Environment, Development and Sustainability, Vol. 26, p. 1229 - 1261. DOI: 10.1007/s10668-022-02756-y.</li>
              <li>Ghosal, S., Lin, N. and Cross, I. (2010). The Role of Open-Source Software for Handling INSPIRE-compliant Data. Geoinformatics (CMedia B.V., Netherlands, ISSN: 1387-0858), Vol. 13 (8), p. 16 – 22.  </li>
            </ul>
          <h2>Theoretical:</h2>
          <br></br>
            <ul>
              <li>Ghosal, S. (2009). Is Nature ‘Cultural’ or ‘Produced’: An Exploratory Analysis Based on Recent Human Geographical Studies. Annals of the National Association of Geographers, India (Delhi School of Economics, ISSN: 0970-972X), Vol. 29 (1), p. 89 – 96.</li>
              <li>Ghosal, S. (2009). Escalation of Knowledge: A Critical Analysis. Geographical Review of India (ISSN: Print 0375-6386), Vol. 71 (3), p. 233 – 239.</li>
              <li>Ghosal, S. (2008). Philosophy of Regional Science. Indian Journal of Regional Science (Regional Science Association, ISSN: Print 0046-9017), Vol. 40 (2), p. 151 – 153.</li>
              <li>Ghosal, S. (2005). Geographical Contributions of the Work of Pierre Bourdieu. Indian Journal of Geography and Environment (ISSN: Print 0972-7388), Vol. 10, p. 1 – 7.</li>
            </ul>
          {/* <h2>Journal Papers (Under Review):</h2>
          <br></br>
            <ul>
              <li>Novel Conceptual Framework and SEM-based Model to Study the Water Insecurity from the Perspective of Vulnerability. Environmental Development.</li>
              <li>What Makes Household Water System Complex? A Qualitative System Analysis of Human-water Dynamics. Water Resources Management.</li>
              <li>Suboptimal WASH Access and its Nexus with Adverse Birth Outcomes: Modelling the Spatial Heterogeneity Across India. GeoJournal.</li>
              <li>Predictors of the Utilisation of Maternal and Child Healthcare Services in India: A Decomposition Analysis. The Professional Geographer.</li>
              <li>Assessing the Dynamics and Characteristics of Urban Sprawl in the Patna Planning Area, Bihar, India: A Spatial Metrics Analysis. GeoJournal.</li>
              <li>Predictive Modelling of Land use Dynamics Due to Vizhinjam International Seaport on its Catchment Area Using CA- ANN Model. GeoJournal.</li>
              <li>Operational Framework for Developing Sustainable Participatory Potable Water Facility in Rural India. The Professional Geographer.</li>
              <li>Nature of Peoples’ Interaction with Their Surrounding Greeneries: Evidences from an Emerging Indian City Area. Journal of Human Ecology.</li>
              <li>Examining the Changing Knowledge, Attitude and Health Impacts Among Young Tribal Students Through School-based Safe Potable Water Intervention. Water and Environment Journal.</li>
              <li>Unravelling the Impact of Land Use Transformation on Thermal Environment across Seasons: A Comprehensive Study of Rapidly Urbanizing Patna Planning Area, India. Environmental Research.</li>
            </ul> */}
        </div>
        <h1>Book:</h1>
        <div className="publi-content">
          <h2>Book Chapter and Conference Proceedings:</h2>
          <br></br>
            <ul>
              <li>Ghosal, S. (2023). Changing the Geography of Indian Rurality: By Force or Choice (p. 302 – 313). 46th Indian Social Science Congress, p. 302 – 313. Bharathidasan University, Tiruchirappalli, India.</li>
              <li>Ghosh, M., Saha, A., Pal, S., and Ghosal, S. (2021). Do the collection and uses of NTFPs affect household well-being? Evidence from forest villages in eastern Himalaya. In Shit, P. K. et al. (Edi.), Forest Resources Resilience and Conflicts (Elsevier), p. 217 – 225.</li>
              <li>Ghosh, M. and Ghosal, S. (2018). Regional Pattern of Rural Livelihood Opportunities and Capital in Sub-Himalayan West Bengal, India. 12th World Congress of Regional Science Association International (RSAI), p. 751 – 761. BITS Pilani, Goa Campus, India.</li>
              <li>Ghosal, S. and Liu, J. (2015). Forest Dependency: A Globally Established Model with Contradictions. In Liu, J. et al. (Edi.), Linking Biological and Cultural Diversity to Landscape Management, p. 48 – 51. Nanjing Forestry University, China.</li>
              <li>Ghosal, S. (2014). Role of Participatory Mechanism for Inclusive Growth. In Kannan, E. et al. (Edi.), Green Economy and Sustainable Development, p. 1 - 13. ISEC, Bangalore, India.</li>
              <li>Ghosal, S. (2013). Sustainable Forest Ecology Management: Religious Faith, Believes and Practices. In Heok-Choh, S. et al. (Edi.), Traditional Forest-related Knowledge and Culture for Green Economy, p. 164 -164. Asia Pacific Association of Forestry Research Institutions, Malaysia.</li>
              <li>Ghosal, S. (2011). Community Based Approach: Why, When and to What Extent? In Rout, S. (Edi.), Community, Institutions and Participation in Natural Resource Governance, p. 205 – 219. Dept of Sociology, University of Hyderabad, India.</li>
              <li>Ghosal, S., Watkins, C. and Jewitt, S. (2010). Marketing of Non-Timber Forest Products Produced in Dry-Deciduous Forest of West Bengal, India. The XIII World Forestry Congress Proceedings, Buenos Aires, Argentina.</li>
            </ul>
        </div>
        <h1>Conferences:</h1>
        <div className="publi-content">
          <h2>Conferences, Seminars, and Workshops:</h2>
          <br></br>
            <ul>
              <li>“Grassroots Models for Strengthening STI Capabilities in Community and to Improve Livelihood Generation”, NSOIM, IISF - 2023, DBT-Translational Health Science and Technology Institute (THSTI) RCB Campus, Faridabad, Haryana (17th – 19th January, 2024)</li>
              <li>International Workshop on “Water-Energy-Food-Health Nexus”. IIT Kharagpur in collaboration with the University of Edinburgh, UK (31st July – 4th August 2023, online). Special Talk: Thematic Nexus Water-Energy-Food-Health.</li>
              <li>Virtual International Conference on “Environment, Sustainability, and Technology in Social Sciences”. KL University (1st -3rd June 2023). Special Lecture: Sustainability Makes a Technology Environment Friendly.</li>
              <li>“Advanced Management Development Programs on Social Entrepreneurship”, VGSoM, IIT Kharagpur in collaboration with Ministry of MS&ME (20th – 24th February 2023). Title of the Presentation: Theories of Social Impact and Social Changes.</li>
              <li>“46th Indian Social Science Congress”, Bharathidasan University, Tiruchirappalli (27th – 31st January 2023). Outstation Chairman Talk for Thematic Panel 17: Changing the Geography of Indian Rurality: By Force or Choice.</li>
              <li>International Conference on "Rural Transformation: From Natural to Cultural", CRDIST, IIT Kharagpur (5 - 6 May 2021). Title of the Presentation: Rural Transformation: From Natural to Cultural.</li>
              <li>AICTE online FDP on "Design Thinking on Developmental Projects Related to Social and Rural", IIITDM, Kurnool (17th - 21st October 2020).Title of the Presentation: Tribal Development: Perspectives and Planning.</li>
              <li>Seminar Series on “COVID-19 Pandemic Disaster: Water, Agriculture and Environment”, IIT Jodhpur (5th June 2020). Title of the Presentation: User Friendly Emerging Technology Confirms Sustainability.</li>
              <li>International Seminar on 'Issues of Development With Special Reference to Gender, Caste and Religion', Midnapore College (17th - 18th December, 2019). Title of the Presentation: Processing Thoughts for Planning Development</li>
              <li>'4th India Water Impact Summit 2019' (IWIS), Vigyan Bhawan, New Delhi (5th - 7th December, 2019). Moderator for the Plenary Session on 'Delivering Jal Jeevan Mission in Synergy With River Restoration and Conservation Activities in Rural India - Beyond Ganga Rejuvenation'.</li>
              <li>'4th International Conference on Public Policy', Concordia University, Montreal, Canada (26th - 28th June, 2019). Title of the Presentation: Commons Participation in Technology Transfer for a Better Quality of Life, Livelihood Generation, and Poverty Alleviation in Rural India.</li>
              <li>UK-India-Bangladesh Global Challenge Research Fund (GCRF) Workshop on 'Arsenic in the Food Chain', University of Sheffield, UK (17th - 18th September, 2018). Title of the Presentation: Educating The Rural India: An Approach Towards Arsenic Problem Mitigation.</li>
              <li>National workshop on ‘Resource Use and Conservation for Sustainable Socio-ecoloical Developmennt’, NIRDPR, Guwahati (21st – 22nd December, 2017). Title of the Presentation: ‘Natural Resource Conservation and Management as a Part of Development Planning’.</li>
              <li>International Conference on ‘Land Use/ Cover Changes, Biodiversity, Health and Environment, Local and Regional Development’, Romanian Academy, Institute of Geography, Bucharest, Romania (10th – 14th September, 2017). Title of the Presentation: ‘Promoting Biodiversity Knowledge: A Means for Nature Conservation’.</li>
              <li>‘Indian Heritage in Digital Space’ (IHDS) Workshop, CSIR–CEERI, BISR Jaipur (15th – 16th July, 2017). Title of the Presentation: ‘Digitization of Sacred Groves: Geo-Ecological Heritage of West Bengal’.</li>
              <li>International Conference on ‘Emerging Technologies in Agricultural and Food Engineering’, IIT Kharagpur (27th – 30th December, 2016). Co-chaired Technical session ‘Environmental Remediation Technologies’.</li>
            </ul>
        </div>
        <div className="image-pub-container">
          <img src="https://rukminim2.flixcart.com/image/850/1000/jpsnma80/book/2/9/3/sustainable-forestry-people-culture-and-economics-original-imafbyhvz8nz3apz.jpeg?q=90&crop=false" alt="Jane Writer" className="pub-image" />
        </div>
      </div>
    </div>
  );
};

export default Publications;
