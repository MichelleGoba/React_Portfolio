import React from 'react';
import "./portfolio.css";
import { Container } from 'react-bootstrap';

import image1 from '../../images/skills1.jpg';

const Portfolio = () => {
  return (
    <Container className='container-fluid  about-section' id='portfolio'>
      <div className='portfolio'>
        <div className='projects'> 
          <img src= {image1} className='image1'/>
        </div>

        <div className='projects'>
          <img src= {image1} className='image2'/> 
        </div>
        <div className='projects'>
        <img src= {image1} className='image3'/> 
        </div>
      </div>
      
     

    </Container>
  )
}

export default Portfolio