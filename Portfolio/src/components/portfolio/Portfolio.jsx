import React from 'react';
import "./portfolio.css";
import { Container } from 'react-bootstrap';

import image1 from '../../images/skills1.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Portfolio = () => {
  return (
    <Container className='container-fluid  about-section' id='portfolio'>
      <h2 className='title'>Portfolio</h2>
      <h4>Take a look at some o my pojects:</h4>

        <div className='portfolio'>
          
          <div className='projects'>
            <p>Project 1</p>
            <img src= {image1}/>
            <button>More</button>
           
          </div>
          <div className='projects'>
            <p>Project 1</p>
            <img src= {image1}/>
            <button>More</button>
           
          </div>
          <div className='projects'>
            <p>Project 1</p>
            <img src= {image1}/>
            <button>More</button>
           
          </div>
          
          


        </div>
         
         
           
    
      
     

    </Container>
  )
}

export default Portfolio