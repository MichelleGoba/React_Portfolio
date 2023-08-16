import React from 'react';
import "./home.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import myLogo from '../../images/logo.png';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';



const Home = () => {
  return (
    <Container className='container-fluid home-section'>
      <Row>
        <Col sm={12} md={8} lg={6} className='content'>
          <h1 className='greeting'>Hi! Im <span>M</span>ichelle</h1>
          <h3 className='my-profession'>Im a <span className='typing' id='profession'>Junior Software Developer</span></h3> 
          <p>I am a Junior Software Developer from Cape Town who is learning how to navigate the development processes. My area of competence includes designing websites, applications, and many more...</p>

           {/* Home buton start */}
           <div className='home-button'>
              <a href='#about'className='btn'>More about Me</a>
            </div>
          {/* Home buton end */}

          {/* Social icons start*/}
          <div className='social-icons'>
            <a href='#'>
              <FontAwesomeIcon icon={faFacebook}/>      
            </a>

            <a href='#'>
              <FontAwesomeIcon icon={faInstagram}/>     
            </a>

            <a href='#'>
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div>
          {/* Social icons end */}

         
        </Col>
        
        {/* Home image start */}
        <Col sm={12} md={8} lg={6} className='home-image'>
          <img src= {myLogo} className='image mx-auto'/> 
        </Col> 
        {/* Home image end */}
      </Row>
    </Container>

  )
}

export default Home