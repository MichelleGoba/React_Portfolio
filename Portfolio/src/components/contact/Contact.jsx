
import "./contact.css";
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className='container-fluid  contact-section' id='contact'>
      <h3 className='title'>Contact Me</h3>
      <h4>Send me an Email</h4>
      <h4>Im very responsive to messages</h4>

      <div className='contact-container'>   
        <div className='contact-form'>
          <div className='row'>
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Name' className='form-text'></input>
              </div>
            </div>
            
            <div className='group1'>
              <div className='input'>
              <input type='text' placeholder='Email' className='form-text'></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <input type='text' placeholder='Subject' className='form-text'></input>
              </div>
            </div>
          </div>

          <div className='row'>
          <div className='group2'>
              <div className='input'>
              <textarea name="" id="message" className='form-text'  placeholder="Message"></textarea>
              </div>
            </div>
          </div>

          <div className='group'>
          
              <button className='cont-btn'>Send Email</button>

          </div>


        </div>

      
      
      </div>



    </Container>
  )
}

export default Contact