import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Container } from "react-bootstrap";
import { useState } from "react";
import contact1 from "../../images/contact1.png";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  // contact form
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [recaptchaValid, setRecaptchaValid] = useState(true); // Initially set to true

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required!";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!";
    } else if (
      !/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i.test(formData.email)
    ) {
      validationErrors.email = "Email is not valid!";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required!";
    }

    return validationErrors;
  };

  // google reCapctcha function
  const [googleCaptcha, setGoogleCaptcha] = useState(null);

  // sending contact form data to email - Ref for the form element
  const form = useRef();

  // function to send the email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fifserf",
        "template_yqbddze",
        form.current,
        "gnmTeRAYIuMI3oPr4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);


    if(!googleCaptcha){
      setRecaptchaValid(false);
    }else{
      setRecaptchaValid(true);
    }
    
    if (Object.keys(validationErrors).length === 0 && recaptchaValid) {
      alert("Message submitted successfully");
      setFormData(initialFormData);

      // send the email
      sendEmail(e);
    }
  };

  return (
    <Container className="container-fluid  contact-section" id="contact">
      <h3 className="title">Contact Me</h3>
      <h4>Send me an email</h4>

      <div className="contact-container">
        <div className="contact-box">
          

          <form ref={form} onSubmit={handleSubmit} className="right">
            <div className="input-field">
              <input
                type="text"
                className="field"
                name="name"
                placeholder="Name"
                autoComplete="off"
                onChange={handleChange}
                value={formData.name}
              ></input>
              {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            </div>
            <div>
              <input
                type="text"
                className="field"
                name="email"
                placeholder="example@gmail.com"
                autoComplete="off"
                onChange={handleChange}
                value={formData.email}
              ></input>
              {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
            </div>
            <div>
              <input
                type="text"
                className="field"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                onChange={handleChange}
                value={formData.subject}
              ></input>
      
            </div>
            <div>
              <textarea
                type="text"
                className="field"
                name="message"
                placeholder="Message"
                autoComplete="off"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
            </div>

            <div className="recaptcha-box">

            <ReCAPTCHA className="recaptcha"
              sitekey="6LfPb-MnAAAAAIcqD6LGgxKJ44a_Knfx-ZipmtSk"
              onChange={(val) => {
                setGoogleCaptcha(val);
                setRecaptchaValid(true);  //reset the validation when the reCaptcha changes
            }}
            /> 
            </div>
                        {!recaptchaValid && (
              <span style={{ color: "red" }}>
                Please verify that you are not a robot.
              </span>
            )}



            <button  type="submit" className="button">
              Submit
            </button>
          </form>
          <div className="left">
            <div className="flipImg-box">
              <div className="flipImg-box-inner">
                <div className="flipImg-box-front">
                  <img src={contact1} className="cnt-img" />
                </div>
                <div className="flipImg-box-back">
                  <p>
                    Im very responsive to messages <br /> <span>😊</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
