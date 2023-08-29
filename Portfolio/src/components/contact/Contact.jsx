import "./contact.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import contact1 from '../../images/contact1.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const initialFormData ={
    name: '',
    email: '',
    subject: '',
    message: '',

  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData, [name] : value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()){
      validationErrors.name = 'Name is required!';
    }
    if(!formData.email.trim()){
      validationErrors.email = 'Email is required!'
    }else if(!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i.test(formData.email)){
      validationErrors.email= "Email is not valid!"
    }
    if(!formData.message.trim()) {
      validationErrors.message = "Message is required!"
      }

      return validationErrors;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
  

    if(Object.keys(validationErrors).length === 0) {
      alert("Message submitted successfully");
      setFormData(initialFormData)
    }
    
  };

  return (
    <Container className="container-fluid  contact-section" id="contact">
      <h3 className="title">Contact Me</h3>
      <h4>Send me an Email</h4>
      <h4>Im very responsive to messages</h4>
    
      <div className="contact-container">
      <div className="contact-box">

      <div className="left">
        <div className="flip-box">
        <div className="flip-box-inner">

    <div className="flip-box-front">
    <img src={contact1} className="cnt-img"/> 
    </div>
    <div className="flip-box-back">
     
      <p>Im very responsive to messages</p>
        <FontAwesomeIcon>{}</FontAwesomeIcon>
    </div>
  </div>
        
        </div> 
      </div>
  
    <form onSubmit={handleSubmit} className="right">
    <div>
      
      <input
        type="text" className="field"
        name="name"
        placeholder="Name"
        autoComplete="off"
        onChange={handleChange}
        value={formData.name} 
        
      ></input>
      {errors.name && <span>{errors.name}
        </span>}
    </div>
    <div>
      
      <input
        type="text" className="field"
        name="email"
        placeholder="example@gmail.com"
        autoComplete="off" onChange={handleChange}
        value={formData.email} 
      ></input>
       {errors.email && <span>{errors.email}
        </span>}
    </div>
    <div>
      
      <input
        type="text" className="field"
        name="subject"
        placeholder="Subject"
        autoComplete="off" onChange={handleChange}
        value={formData.subject} 
      ></input>
       {errors.subject && <span>{errors.subject}
        </span>}
    </div>
    <div>
      
      <textarea
        type="text" className="field"
        name="message"
        placeholder="Message"
        autoComplete="off" onChange={handleChange}
        value={formData.message} 
      ></textarea>
       {errors.message && <span>{errors.message}
        </span>}
    </div>
    <button type="submit" className="button">Submit</button>
  </form>

</div>
</div>
    </Container>
  );
};

export default Contact;
