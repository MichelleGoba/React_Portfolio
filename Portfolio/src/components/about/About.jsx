import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/abt-img.png';
import "./about.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
  return (
    <Container className='about-section'>
      <h2 className='about-title'>About Me</h2>
      <Row>
        {/*about image start*/}
        <Col xs={6} md={6} className='about-image'>
          <img src= {aboutImage} className='image' />
        </Col>
        {/* about image end */}

        <Col lg={6} md={4} className='content'>
          
        </Col>

        
      </Row>
    </Container> 

  )
}

export default About