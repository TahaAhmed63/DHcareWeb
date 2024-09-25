import React, { useEffect, useState } from 'react'
import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner'
import bgimage from "./../assest/image-34.webp";

// import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import SocialSection from '../Components/ElementComponents/SocailSection';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Handle form submission here
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
       <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Frequently Answer Question" />
      </Helmet>
          <MainPagesBanner bgimage={bgimage} pagetitle={'Contact Us'} />
          <Container className="py-5">
    <div className="row">
    <div className="map-set wpb_column vc_column_container col-12 col-md-6 col-sm-12 ">
   
                <iframe
                  title="Google Map of DHCare Licensed Home Care Agency"

                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24194.086141368163!2d-73.81094638649438!3d40.71227564108652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25e49eca51467%3A0x4213ea6bb29a2a6c!2sDHCare%20Licensed%20Home%20Care%20Agency!5e0!3m2!1sen!2s!4v1723827253557!5m2!1sen!2s"
                  width={'100%'}
                  height={"100%"}
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen=""
                  loading="lazy"
              
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
         
          
     

    <div className=" col-12 col-md-6 col-sm-12">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="wpb_text_column wpb_content_element">
            <div className="wpb_wrapper">
              <h2 style={{ textAlign: "left" }}>
                <span style={{ color: "#98b670" }}>How can we help?</span>
              </h2>
              <p style={{ textAlign: "left" }}>
                Please complete the contact information and let us know your
                needs. Upon receipt of your information one of our team members
                will reach out.
              </p>
            </div>
          </div>
          <div
            className="gf_browser_chrome gform_wrapper gravity-theme gform-theme--no-framework"
            data-form-theme="gravity-theme"
            data-form-index={0}
            id="gform_wrapper_4"
          >
                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                <Form.Group controlId="formName">
              <Form.Label>Name <span className="text-danger">*</span></Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                       className='home-field-setting '
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>

                </div>
                <div className="col-md-6">
                 <Form.Group controlId="formEmail">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                required
                type="email"
                       className='home-field-setting '
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
                </div>
            </div>
    

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Phone"
                       className='home-field-setting '
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                className='home-field-setting '
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="my-2" style={{  backgroundColor: "#9ebd7b",
  color: "#fff",
  borderRadius: "8px",
  fontSize: "18px",
  padding: "14px 47px",
  border: "0px",
  width:'100%',
  textAlign: "center",
  fontWeight: 600}}>
              Submit
            </Button>
          </Form>

          </div>
        </div>
      </div>
    </div>
<SocialSection/>
  </div>
  </Container>
  </>
  )
}

export default ContactUs