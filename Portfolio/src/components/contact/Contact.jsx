import "./contact.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
// import contact1 from '../../images/contact1.png';

const Contact = () => {
  
  
  return (
    <Container className="container-fluid  contact-section" id="contact">
      <h3 className="title">Contact Me</h3>
      <h4>Send me an Email</h4>
      <h4>Im very responsive to messages</h4>

      <div className="contact-container">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            


    
              
            
      
          </div>
        </div>
      </div>


    </Container>
  );
};

export default Contact;
