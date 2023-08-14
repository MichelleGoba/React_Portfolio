import React from 'react';
import "./home.css";
// import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import myLogo from '../../images/logo.png';



const Home = () => {
  return (
    <Container>
      <div className='content'>
        <h1>Hi! im <span>M</span>ichelle</h1>
        <h3 className='my-profession'>Im a <span className='typing'>Junior Software Developer</span></h3>

      </div>
      <div className='image'>
        <img src= {myLogo} className='home-image'/>
      </div>
    </Container>

  )
}

export default Home