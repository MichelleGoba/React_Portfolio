// import React from 'react';
import "./portfolio.css";
import { Container } from "react-bootstrap";

import project1 from "../../images/MZAMOMTSHA.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.jpg";

const Portfolio = () => {
  return (
    <Container className="container-fluid  portfolio-section" id="portfolio">
      <h2 className="title">Portfolio</h2>
      <h4>Take a look at some of my projects:</h4>

      <div className="portfolio">
        <div className="projects">
          <div className="p-img-box">
            <img src={project1} className="p-img" />
            <p className="description">
              The objective of this project is to showcase the local and
              national footprint of the school. It allows users to quickly and
              easily obtain any information they need about the school on any
              device. With just one click, you may get any necessary
              information, such as admissions requirements, school policies, and
              contact information.
            </p>
          </div>
          <a href="https://github.com/MichelleGoba/Mzamomtsha-Primary-School-Website" target="_blank" rel="noopener noreferrer">
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="projects">
          <div className="p-img-box">
            <img src={project2} className="p-img" />
            <p className="description">
              This website's goal is to provide customers with quick information
              about the services that Ndalo's entertainment provides.
            </p>
          </div>
          <a href="https://github.com/MichelleGoba/Ndalo" target="_blank" rel="noopener noreferrer" >
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="projects">
          <div className="p-img-box">
            <img src={project3} className="p-img" id="p3" />

            <p className="description">
              The purpose of this Bank App is to allow users to access their
              banking accounts and conduct financial transactions using a mobile
              device, anytime and from anywhere.
            </p>
          </div>
          <a href="https://github.com/MichelleGoba/Banking-Application" target="_blank" rel="noopener noreferrer">
            <button className="btn">Go to Project</button>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
