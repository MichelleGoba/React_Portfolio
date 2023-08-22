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
            <div>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Go to project</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
          <div className='projects'>
            <div>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  
                </Card.Text>
                <Button variant="primary">Go to project</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
          <div className='projects'>
            <div>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary">Go to project</Button>
              </Card.Body>
            </Card>
            </div>
          </div>


        </div>
         
         
           
    
      
     

    </Container>
  )
}

export default Portfolio