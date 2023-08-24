import React from 'react';
import "./footer.css";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import myLogo from '../../images/logo.png';


const Footer = () => {
  return (
    
      <footer className="page-footer font-small pt-2">
        <div className="container-fluid text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3" id='copyright'>
              <p className="footer-copyright py-3">© 2023 Copyright: Michelle</p>
            </div>

            <div className="col-md-4 mb-md-0 mb-3" id='icons'>

            <div className='icon facebook'>
                <a href='#'>
                <span><FontAwesomeIcon icon={faFacebook}/></span>
                </a>
              </div>

              <div className='icon instagram'>
                <a href='#'>
                
                <span><FontAwesomeIcon icon={faInstagram}/></span>
                </a>
              </div>

              <div className='icon linkedin'>
                <a href='#'>
                <div className='tooltip'>Linkedin</div>
                <span><FontAwesomeIcon icon={faLinkedin}/></span>
                </a>
              </div>
              
              <div className='icon github'>
                <a href='#'>
                
                <span><FontAwesomeIcon icon={faGithub}/></span>
                </a>
              </div>
            </div>

            <div className='col-md-4 mb-md-0 mb-3' id='logo'>
              <img src={myLogo} className='logo'/>
            </div>
        </div>
    </div>
      </footer> 
  
  )
}

export default Footer