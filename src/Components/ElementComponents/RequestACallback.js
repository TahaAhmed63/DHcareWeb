import React, { useEffect, useState, useRef } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import cross from "./../../assest/close (1).png";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const RequestACallback = ({ getfunc, functionmodalclose }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    functionmodalclose(); // Close the modal via parent callback
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      emailjs.sendForm('service_xdox6kh', 'template_e7g1kka', formRef.current, 'LTg0QPyuGiWeZ1LBU')
        .then((result) => {
          Swal.fire("Email sent successfully!", "Your email has been sent successfully", "success")
            .then(() => {
              formRef.current.reset(); // Reset form fields
              handleClose()
              setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
              });
              setValidated(false); // Reset validation
            });
        }, (error) => {
          Swal.fire("Failed to send email", "Please try again", "error");
        });
    }

    setValidated(true); // Mark the form as validated
  };

  useEffect(() => {
    if (getfunc) {
      handleShow(getfunc);
    }
  }, [getfunc]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered className='rounded-0'>
        <Modal.Header closeButton>
          <h2 style={{ textAlign: 'center', color: '#9ebd7b', width: '100%' }}>Request A CallBack</h2>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
            <div className="row my-2">
              <div className="col-md-6 my-2">
                <Form.Group controlId="formName">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    className='home-field-setting'
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-6 my-2">
                <Form.Group controlId="formEmail">
                  <Form.Control
                    required
                    type="email"
                    className='home-field-setting'
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

            <Form.Group controlId="formPhone" className='my-2'>
              <Form.Control
                type="tel"
                placeholder="Phone"
                className='home-field-setting'
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className='my-2'>
              <Form.Control
                as="textarea"
                rows={4}
                className='home-field-setting'
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Col lg={12} className='d-flex justify-content-center py-4'>
              <Button type='submit' id="gform_submit_button_1">
                Submit
              </Button>
            </Col>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Custom styles for close button */}
      <><style>{`
        .btn-close {
          --bs-btn-close-bg: url(${cross});
          position: absolute;
          height: 26px;
          width: 26px;
          left: auto;
          margin: 0px;
          opacity: 1;
          scale: 0.8;
          right: -13px;
          top: -7px;
          padding: 0;
          color: #fff;
          font-family: Arial;
          font-weight: 100;
          font-size: 24px;
          line-height: 24px;
          border: 2px solid #fff;
          border-radius: 26px;
          box-shadow: 0 0 15px 1px rgba(2, 2, 2, 0.75);
          background-color: rgba(0, 0, 0, 1.00);
        }
      `}</style></>
    </>
  );
};

export default RequestACallback;
