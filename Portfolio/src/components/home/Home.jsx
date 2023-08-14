import React from 'react';
import "./home.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import myLogo from '../../images/logo.png';
import Row from 'react-bootstrap/Row';



const Home = () => {
  return (
    <Container className='home-section'>
      <Row>
        <Col lg={6} md={4} className='content'>
          <h1 className='greeting'>Hi! Im <span>M</span>ichelle</h1>
          <h3 className='my-profession'>Im a <span className='typing'>Junior Software Developer</span></h3>
          <p>I am a Junior Software Developer from Cape Town who is learning how to navigate the development processes. My area of competence includes designing websites, applications, and many more...</p>
          <a href='#about'className='btn'>More about Me</a>
        </Col>

        <Col xs={6} md={6} className='home-image'>
          <img src= {myLogo} className='image' />
        </Col>
      </Row>
    </Container> 

  )
}

export default Home