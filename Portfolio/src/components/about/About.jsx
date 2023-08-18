import React from 'react';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/abt-img.png';
import "./about.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <Container className='container-fluid  about-section' id='about'>
      <h2 className='title'>About Me</h2>
      <Row> 
        {/*about image start*/}
        <Col xs={6} md={6} w-100 className='about-image'>
          <img src= {aboutImage} className='image fluid image' />
        </Col> 
        {/* about image end */}

         <Col lg={6} md={4} h-100 w-100 className='content'>
            <h3 className='profession'>Im a Junior Software Developer</h3>
            <p>Im a self-driven and highly motivated individual. Exceptionally good at handling pressure, picking up new concepts quickly, and effectively communicating ideas. I have been progressively exposed to theoretical and practical knowledge in Software Development, Environmental Health and Safety and Geographic Information Systems. As an individual that is always eager to learn, I am currently enhancing my Software Development skills and continuously seeking ways to add value to initiatives and identifying opportunities.</p> 

            <div className='personal-info'>
              <div className='row'>
                <div className='email'>
                  <p><strong>Email: goba.michelleolwethu@gmail.com</strong></p>
                </div>
              </div>
              <div className='city'>
                <div className='personal-info'>
                  <p><strong>City: Cape Town</strong></p>
                </div>
              </div>
            </div>

            <div className='abt-buttons'>
            <div className='download-btn'>
              <a href='#' className='btn' id='download-btn'>Download CV</a>
            </div>
            <div className='hire-btn'>
            <a href='#' className='btn' id='hire-btn'>Hire Me</a>   
            </div>
            </div>      
        </Col>
      </Row> 
    </Container> 

    // Skills section start
    
    // Skills section end


  )
}

export default About