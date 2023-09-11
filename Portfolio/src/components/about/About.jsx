// import React from 'react';
import Col from "react-bootstrap/Col";
import aboutImage from "../../images/abt-img.png";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CV from "../../images/Michelle Goba_CV.pdf";

const About = () => {
  return (
    <Container className="container-fluid  about-section" id="about">
      {/* <h2 className="title">About Me</h2> */}
      <Row>
        {/*about image start*/}
        <Col xs={12} md={6} w-100 className="about-image">
          <img src={aboutImage} className="img-fluid" />
        </Col>
        {/* about image end */}

        {/* content column start */}
        <Col xs={12} md={6} h-100 w-100 className="content">
          <h3 className="profession">Im a Junior Software Developer</h3>
          <p>
            I am a self-driven and highly motivated individual. Exceptionally
            good at handling pressure, picking up new concepts quickly, and
            effectively communicating ideas. I have been progressively exposed
            to theoretical and practical knowledge in Software Development,
            Environmental Health and Safety and Geographic Information Systems.
            As an individual that is always eager to learn, I am currently
            enhancing my Software Development skills and continuously seeking
            ways to add value to initiatives and identifying opportunities.
          </p>

          <div className="personal-info">
            <div className="row">
              <div className="email">
                <p>
                  <strong>Email: goba.michelleolwethu@gmail.com</strong>
                </p>
              </div>
            </div>
            <div className="city">
              <div className="personal-info">
                <p>
                  <strong>City: Cape Town</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="abt-buttons">
            <div className="download-btn">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn" id="download-btn">
                Download CV
              </a>
            </div>
            <div className="hire-btn">
              <a href="#contact" className="btn" id="hire-btn">
                Hire Me
              </a>
            </div>
          </div>
        </Col>
        {/* content column end */}
      </Row>

      <Container className="container-fluid skills" id="skills">
        <h3 className="skills-title">Skills</h3>
        <Row className="skills-row">
          <Col xs={12} md={6} className="skills-content ">
            <p>
              I am a dynamic, quick thinking creative professional with the
              skills to take a web design from the initial information
              architecture phase all the way through to front-end web
              development. <br />
              My skills include designing and developing features and
              functionalities of websites and applications using Balsamiq,
              Figma, HTML, CSS, JavaScript, Node JS, React JS, and Python.{" "}
              <br />I have experience coordinating with other developers,
              learning quickly, multitasking, meeting deadlines, and
              communicating promptly and clearly.
            </p>
          </Col>
          <Col xs={12} md={6} className="skills-images">
            <div className="imgSkills"></div>
          </Col>
        </Row>

        <Container className="container-fluid skills" id="education">
          <p className="qualification">Qualifications</p>
          <p className="journey">My personal journey</p>
          <div className="accomplishments">

          <div className="experience-section">
              <h3 className="title">Experience</h3>
              <div className="row">
                {/* Timeline Box */}
                <div className="timeline-box ">
                  <div className="timeline shadow-dark">
                    {/* <!-- ===== timeline item start===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> July - Current
                      </h3>
                      <h4 className="timeline-title">Younglings Africa</h4>
                      <h5>Junior Software Developer</h5>
                      <p className="timeline-text">
                        Im responsible for building, developing, and maintaining
                        websites using HTML, CSS, and JavaScript, and
                        implementing front-end logic to govern the behavior of
                        visual elements in web applications.
                      </p>
                    </div>
                    {/* <!-- ===== timeline item end===== --> */}
                    {/* <!-- ===== timeline item start===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2023 - Current
                      </h3>
                      <h4 className="timeline-title">UVU Africa</h4>
                      <h5>Software Development Intern</h5>
                      <p className="timeline-text">
                        Worked on projects that developed websites and
                        applications that allowed learners, teachers, and
                        parents to access any school related information on any
                        device.
                      </p>
                    </div>
                    {/* <!-- ===== timeline item ===== --> */}
                   
                    {/* <!-- ===== timeline item ===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2018 - 2018
                      </h3>
                      <h4 className="timeline-title">CPUT</h4>
                      <h5>Teaching Assistant</h5>
                      <p className="timeline-text">
                      - Assisted students with troubleshooting within ArcMap. <br/>
                      - Supported the students with their map making procedures and assignments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-section ">
              <h3 className="title">Education</h3>
              <div className="row">
                {/* <!-- ===== timeline item start ===== --> */}
                <div className="timeline-box ">
                  <div className="timeline shadow-dark" id="timeline">
                    {/* <!-- ===== timeline item start ===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2019 - 2020
                      </h3>
                      <h4 className="timeline-title">UCT</h4>
                      <h5>BSc Honors in GIS</h5>
                      <p className="timeline-text">
                        The degree provided me with the practical skills and
                        academic understanding required to integrate GIS
                        concepts into my daily job routine. Natural,
                        geographical, and computer sciences were the center of
                        the field.
                      </p>
                    </div>
                    {/* <!-- ===== timeline item end ===== --> */}

                    {/* <!-- ===== timeline item end ===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2015 - 2016
                      </h3>
                      <h4 className="timeline-title">CPUT</h4>
                      <h5>BTech in Environmental Management</h5>
                      <p className="timeline-text">
                        This degree prepared me for responsible positions which
                        require knowledge of environmental impact assessments
                        and environmental management systems.
                      </p>
                    </div>
                    {/* <!-- ===== timeline item ===== --> */}
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2012 - 2015
                      </h3>
                      <h4 className="timeline-title">CPUT</h4>
                      <h5>ND Environmental Management</h5>
                      <p className="timeline-text">
                        This degree prepared me for responsible positions which
                        require knowledge of environmental impact assessments
                        and environmental management systems.
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
  );
};

export default About;
