import React from 'react';
import "./portfolio.css";
import { Container } from 'react-bootstrap';
import image1 from '../../images/skills1.jpg';
import project1 from '../../images/MZAMOMTSHA.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';


const Portfolio = () => {
  return (
    <Container className='container-fluid  portfolio-section' id='portfolio'>
      <h2 className='title'>Portfolio</h2>
      <h4>Take a look at some of my projects:</h4>

        <div className='portfolio'>
          
          <div className='projects'>
            <p>Project 1</p>
            <img src= {project1} className='p-img'/>
            <a href='https://github.com/MichelleGoba/Mzamomtsha-Primary-School-Website'><button>Go to Project</button></a>
           
          </div>
          <div className='projects'>
            <p>Project 2</p>
            <img src= {project2} className='p-img'/>
            <a href='https://github.com/MichelleGoba/Ndalo'><button>Go to Project</button></a>
           
           
          </div>
          <div className='projects'>
            <p>Project 3</p>
            <img src={project3} className='p-img'/>
            <a href='https://github.com/MichelleGoba/Ndalos_homepage'><button>Go to Project</button></a>
           
          </div>
          
          


        </div>
         
         
           
    
      
     

    </Container>
  )
}

export default Portfolio