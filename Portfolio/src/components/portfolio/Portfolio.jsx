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
             Mzamotsha Primary School website
            </p>
          </div>
          <a
            href="https://github.com/MichelleGoba/Mzamomtsha-Primary-School-Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="projects">
          <div className="p-img-box">
            <img src={project2} className="p-img" />
            <p className="description">
              Ndalo's entertainment Website
            </p>
          </div>
          <a
            href="https://github.com/MichelleGoba/Ndalo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Go to Project</button>
          </a>
        </div>
        <div className="projects">
          <div className="p-img-box">
            <img src={project3} className="p-img" id="p3" />

            <p className="description">
              Banking Application
            </p>
          </div>
          <a
            href="https://github.com/MichelleGoba/Banking-Application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Go to Project</button>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
