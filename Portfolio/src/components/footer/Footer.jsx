import { useEffect } from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  useEffect(() => {
    // Function to wrap each character in a span tag
    const wrapCharacters = () => {
      const text = document.querySelector(".text");
      text.innerHTML = text.textContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
    };

    // Call the wrapCharacters function
    wrapCharacters();

    // Function to add the rotation animation
    const rotateText = () => {
      const spans = document.querySelectorAll(".text span");
      let rotation = 0;
      setInterval(() => {
        rotation = (rotation + 1) % 360; // Increment rotation from 0 to 359 degrees
        spans.forEach((span, index) => {
          span.style.transform = `rotate(${index * 35 + rotation}deg)`; // How close are the rotating words to each other
        });
      }, 100); // Adjust the interval for the rotation speed, with 100 rotation does not return to 0 anticlockwise, it rotates clockwise
    };

    // Call the rotateText function
    rotateText();
  }, []);

  return (
    <footer className="page-footer font-small pt-2">
      <div className="container-fluid text-md-left">
        <div className="row" id="footer">
          <div className="col-md-4 mt-md-0 mt-3" id="copyright">
            <p className="footer-copyright py-3">© Michelle Goba: 2023</p>
          </div>

          {/* icons div start */}
          <div className="col-md-4 mb-md-0 mb-3" id="icons">
            <div className="icon instagram">
              <a
                href="https://www.instagram.com/michelle_goba_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
            </div>

            <div className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/michelle-goba-12955ba2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="tooltip">Linkedin</div>
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </div>

            <div className="icon github">
              <a
                href="https://github.com/MichelleGoba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faGithub} className="footer-icon" />
                </span>
              </a>
            </div>
          </div>
          {/* icons div end */}

          {/* logo start */}
          <div className="col-md-4 mb-md-0 mb-3" id="logo">
            <div className="circle">
              <a href="home">
                <div className="footer-logo"></div>
              </a>
              <h3 className="text">Developer- </h3>
            </div>
          </div>

          {/* logo end */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
