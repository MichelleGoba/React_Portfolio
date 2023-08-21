import React from 'react';
import Col from 'react-bootstrap/Col';
import aboutImage from '../../images/abt-img.png';
import "./about.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import image1 from '../../images/skills1.jpg';
import image2 from '../../images/skills2.jpg';
import image3 from '../../images/skills3.jpg';
import image4 from '../../images/skills4.jpg';

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

      <Container className='container-fluid skills' id='skills'>
        <h3 className='skills-title'>Skills</h3>
        <Row className='skills-row'>
        <Col xs={6} md={6} className='skills-content '>
          <p>My skills include designing and developing features and functionalities of websites and applications using Balsamiq, Figma, HTML, CSS, JavaScript, Node JS, React JS, and Python.</p>
          {/* <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, perferendis at. Harum assumenda sint commodi, sit fugiat amet odio, officiis facilis voluptas quam pariatur eius quasi blanditiis voluptatem quod at.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio minus et quod, rerum veritatis at, aliquid excepturi asperiores harum quisquam sed animi beatae deleniti exercitationem doloremque eum. Quaerat, veritatis corrupti?
          </p> */}
        </Col> 
        <Col lg={6} md={4} w-100 className='skills-images'>
          <div className='div-img1'>
            <div className='firstImg'>
              <img src= {image4} className='image4'/>
            </div>
            <div className='secondImg'>
              <img src= {image2} className='image2'/>
            </div>
          </div>

          <div className='div-img2'>
            <div className='thirdImg'>
              <img src= {image3} className='image3'/>
            </div>
            <div className='fourthImg'>
              <img src= {image1} className='image1'/>
            </div>

          </div>
          
        </Col> 

        </Row>

        <Container className='container-fluid skills' id='education'>
          <div className='accomplishments'>
            <div className="education-section">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {/* <!-- ===== timeline item ===== --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2023 - Current
                            </h3>
                            <h4 className="timeline-title">Udemy</h4>
                            <h5>The Complete 2023 Web Development Bootcamp</h5>
                            <p className="timeline-text">In this course I am learning to code and become a full-stack web developer.</p>
                          </div>
                          {/* <!-- ===== timeline item ===== --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2019 - 2020
                            </h3>
                            <h4 className="timeline-title">UCT</h4>
                            <h5>BSc Honors in GIS</h5>
                            <p className="timeline-text">The degree provided me with the practical skills and academic understanding required to integrate GIS concepts into my daily job routine. Natural, geographical, and computer sciences were the center of the field.</p>
                          </div>
                              {/* <!-- ===== timeline item ===== --> */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar"></i> 2015 - 2016
                                </h3>
                                <h4 className="timeline-title">CPUT</h4>
                                <h5>BTech in Environmental Management</h5>
                                <p className="timeline-text">This degree prepared me for responsible positions which require knowledge of environmental impact assessments and environmental management systems.</p>
                              </div>
                                  {/* <!-- ===== timeline item ===== --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2012 - 2015
                            </h3>
                            <h4 className="timeline-title">CPUT</h4>
                            <h5>ND Environmental Management</h5>
                            <p className="timeline-text">This degree prepared me for responsible positions which require knowledge of environmental impact assessments and environmental management systems.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='experience-section'>
                    <h3 className="title">Experience</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          {/* <!-- ===== timeline item ===== --> */}
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i> 2023 - Current
                            </h3>
                            <h4 className="timeline-title">UVU Africa</h4>
                            <h5>Software Development Intern</h5>
                            <p className="timeline-text">I'm responsible for using HTML, CSS, and JavaScript to construct, develop, and maintain websites. I put into practice the front-end logic that controls how web applications' visual
                              components behave. I am also in charge of coding, designing, and deploying development
                              initiatives on the server and client side. I work with developers to design algorithms and
                              flowcharts.
                              </p>
                          </div>
                              {/* <!-- ===== timeline item ===== --> */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar"></i> 2021 - 2022
                                </h3>
                                <h4 className="timeline-title">Steam House Engineering</h4>
                                <h5>Safety Officer</h5>
                                <p className="timeline-text">In this position, was in charge of assuring the company's total compliance with safety, health, and environmental laws, regulations, policies, procedures, and legislation.</p>
                              </div>
                                  {/* <!-- ===== timeline item ===== -->
                                    <!-- ===== timeline item ===== --> */}
                              <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h3 className="timeline-date">
                                  <i className="fa fa-calendar"></i> 2018 - 2018
                                </h3>
                                <h4 className="timeline-title">CPUT</h4>
                                <h5>Teaching Assistant</h5>
                                <p className="timeline-text">Assisted 35 students with Environmental Impact Assessment assignments.
                                  Supported 35 students with their map making procedures and assignments.
                                  Graded assignments for 35 students and ran className help sessions.
                                  </p>
                                </div>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        </Container>
      </Container>
    </Container> 

   


  )
}

export default About