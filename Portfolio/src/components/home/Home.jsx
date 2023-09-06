// import React from 'react';
import "./home.css";
import { useTypewriter } from "react-simple-typewriter";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import myLogo from "../../images/logo.png";
import Row from "react-bootstrap/Row";

const Home = () => {
  const [typrEffect] = useTypewriter({
    words: ["Junior Software Developer", "Designer"],
    loop: {},
    typeSpeed: 80,
    delaySpeed: 40,
  });

  return (
    <Container className="container-fluid home-section" id="home">
      <Row className="home-row">
        <Col sm={12} md={8} lg={6} className="content">
          <h1 className="greeting">
            Hello! <span className="wave">👋</span>
          </h1>
          <h3 className="my-profession">
            Im a <span id="profession">{typrEffect}</span>
          </h3>
          <p>
            I am a Junior Software Developer from Cape Town who is learning how
            to navigate the development processes. My area of competence
            includes designing websites, applications, and many more...
          </p>

          {/* Social icons start*/}
          <div className="social-icons">
            <div className="icon facebook">
              <div className="tooltip">Facebook</div>
              <a href="https://www.facebook.com/chimelle.gee/">
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </div>
            <div className="icon instagram">
              <div className="tooltip">Instagram</div>
              <a href="https://www.instagram.com/michelle_goba_/">
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
            <div className="icon linkedin">
              <div className="tooltip">Linkedin</div>
              <a href="https://www.linkedin.com/in/michelle-goba-12955ba2/">
                <span>
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
            </div>
            <div className="icon github">
              <div className="tooltip">Github</div>
              <a href="https://github.com/MichelleGoba">
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
          {/* Social icons end */}

          {/* Home buton start */}

          <div className="home-button">
            <a href="#contact">Contact Me</a>
          </div>
          {/* Home buton end */}
        </Col>

        {/* Home image start */}
        <Col sm={12} md={8} lg={6} className="image-container">
          <img src={myLogo} className="img-fluid home-img mx-auto" />
        </Col>
        {/* Home image end */}
      </Row>
    </Container>
  );
};

export default Home;
