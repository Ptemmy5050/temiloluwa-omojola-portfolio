import { Link } from "react-router-dom";
import React1 from "../assets/now1.png";
import React2 from "../assets/now2.png";
import "./AboutContentStyles.css";

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>A competent ServiceNow professional with around 7+ years of IT experience including 6+ years of extensive experience in 
                  ServiceNow ITSM working with different modules such as Incident Management, Service Catalog, Problem Management, 
                  Change Management, Project Management and CMDB. 
                  Good understanding and knowledge on all phases of the software development life-cycle (SDLC) and also familiar with 
                  methodologies like Waterfall, Agile/Scrum.</p>
                  <p>I am a self-motivated individual, who enjoys listening, solving problems, learning even in the most difficult of 
                  situations and taking up initiatives in order to be able to attain an enviable height in my chosen field using 
                  the channels provided by a dynamic establishment in the realization of its corporate and business objectives 
                  through provision of good quality services sequel to relevance on the job and structured training.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                    </Link>
           
        </div>
    </div>
  )
};

export default AboutContent