import "./contact.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import contact1 from '../../images/contact1.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
    })
  
    const [errors, setErrors] = useState({})
  
    const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData, [name] : value
     })
     }
  
     const handleSubmit = (e) => {
      e.preventDefault()
      const validationErrors = {}
      if(!formData.name.trim()) {
      validationErrors.name = "Name is required!"
      }
  
      if(!formData.email.trim()) {
        validationErrors.email = "Email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
          validationErrors.email= "Email is not valid!"
        }
  
        if(!formData.message.trim()) {
          validationErrors.message = "Message is required!"
          }
  
        setErrors(validationErrors)
  
        if(Object.keys(validationErrors).length === 0) {
          alert("Message submitted successfully")
        }
    
    }
  
  return (
    <Container className="container-fluid  contact-section" id="contact">
      <h3 className="title">Contact Me</h3>
      <h4>Send me an Email</h4>
      <h4>Im very responsive to messages</h4>
    
      <div className="contact-container">
      <div className="contact-box">
      <div className="left">
         <img src={contact1}/> 
      </div>
    

    {/* //   <h3 className="title">Contact Me</h3>
    //   <h4>Send me an Email</h4>
    //   <h4>Im very responsive to messages</h4>

    //   <div className="contact-container">
    //     <div className="contact-box">
    //       <div className="left"></div>
    //       <div className="right"> */}

         
    <form onSubmit={handleSubmit} className="right">
    <div>
      
      <input
        type="text" className="field"
        name="name"
        placeholder="name"
        autoComplete="off"
        onChange={handleChange}
        
      ></input>
      {errors.name && <span>{errors.name}
        </span>}
    </div>
    <div>
      
      <input
        type="text" className="field"
        name="emial"
        placeholder="email"
        autoComplete="off" onChange={handleChange}
      ></input>
       {errors.email && <span>{errors.email}
        </span>}
    </div>
    <div>
      
      <input
        type="text" className="field"
        name="subject"
        placeholder="subject"
        autoComplete="off" onChange={handleChange}
      ></input>
       {errors.subject && <span>{errors.subject}
        </span>}
    </div>
    <div>
      
      <input
        type="text" className="field"
        name="message"
        placeholder="message"
        autoComplete="off" onChange={handleChange}
      ></input>
       {errors.message && <span>{errors.message}
        </span>}
    </div>
    <button type="submit">Submit</button>
  </form>


    
              
            
      
    {/* //       </div>
    //     </div>
    //   </div> */}

</div>
</div>
    </Container>
  );
};

export default Contact;
