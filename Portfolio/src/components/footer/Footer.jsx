import React from 'react';
import "./footer.css";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import myLogo from '../../images/logo.png';


const Footer = () => {
  return (
    <Container>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <p className="footer-copyright text-center py-3">© 2023 Copyright: Michelle</p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className="col-md-3 mb-md-0 mb-3">
              <a href='#'>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <img src={myLogo} className='logo'/>
            </div>
        </div>
    </div>

      </footer>
    </Container>
  )
}

export default Footer