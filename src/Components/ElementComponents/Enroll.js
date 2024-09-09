import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // US/UK phone number regex

const Enroll = ({ getfunc2, functionmodalclose2 }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [isHomeCarePatient, setIsHomeCarePatient] = useState(false);
  const [hasMedicaid, setHasMedicaid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setShow(false);
    functionmodalclose2(); // Close the modal via parent callback
  };

  const handleShow = () => setShow(true);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({}); // Clear previous errors

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Please provide your name'),
      last_Name: Yup.string().required('Please provide your last name'),
      Email: Yup.string().email('Please provide a valid email').required('Email is required'),
      Phone: Yup.string().matches(phoneRegex, 'Please provide a valid phone number').required('Phone number is required'),
      isHomeCarePatient: Yup.boolean(),
      hasMedicaid: Yup.boolean(),
    });

    // Validate the form data against the schema
    validationSchema.validate({
      name,
      last_Name,
      Email,
      Phone,
      isHomeCarePatient,
      hasMedicaid,
    }, { abortEarly: false })
    .then(() => {
      // Use emailjs to send the form data
      emailjs.sendForm('service_xdox6kh', 'template_up8e1qh', formRef.current, 'LTg0QPyuGiWeZ1LBU')
        .then((result) => {
          console.log(result.text);
          Swal.fire("Email sent successfully!", "Your email has been sent successfully", "success")
            .then(() => {
              formRef.current.reset(); // Reset form on success
              handleClose()
              setName('');
              setLast_Name('');
              setEmail('');
              setPhone('');
              setIsHomeCarePatient(false);
              setHasMedicaid(false);
            });
        }, (error) => {
          console.log(error.text);
          Swal.fire("Failed to send email", "Please try again", "error");
        });
    })
    .catch((validationErrors) => {
      // Display validation errors in the UI
      const formErrors = {};
      validationErrors.inner.forEach((error) => {
        formErrors[error.path] = error.message;
      });
      setErrors(formErrors);
    });
  };

  useEffect(() => {
    if (getfunc2) {
      handleShow(getfunc2);
    }
  }, [getfunc2]);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered className='rounded-0'>
      <Modal.Header closeButton>
        <h2 style={{ textAlign: 'center', color: '#9ebd7b', width: '100%' }}>Enroll Now</h2>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={handleSubmit} ref={formRef}>
          <div className="row my-2">
            <div className="col-md-6 my-2">
              <Form.Group controlId="formName">
                <Form.Control 
                  type="text" 
                  name="name" // Add name attribute
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="First Name" 
                  className='home-field-setting' 
                  isInvalid={!!errors.name} 
                />
                {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-6 my-2">
              <Form.Group controlId="formLastName">
                <Form.Control 
                  type="text" 
                  name="last_Name" // Add name attribute
                  value={last_Name} 
                  onChange={(e) => setLast_Name(e.target.value)} 
                  placeholder="Last Name" 
                  className='home-field-setting' 
                  isInvalid={!!errors.last_Name} 
                />
                {errors.last_Name && <Form.Control.Feedback type="invalid">{errors.last_Name}</Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-6 my-2">
              <Form.Group controlId="Email">
                <Form.Control 
                  type="email" 
                  name="Email" // Add name attribute
                  value={Email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email" 
                  className='home-field-setting' 
                  isInvalid={!!errors.Email} 
                />
                {errors.Email && <Form.Control.Feedback type="invalid">{errors.Email}</Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-6 my-2">
              <Form.Group controlId="Phone">
                <Form.Control 
                  type="tel" 
                  name="Phone" // Add name attribute
                  value={Phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="Phone" 
                  className='home-field-setting' 
                  isInvalid={!!errors.Phone} 
                />
                {errors.Phone && <Form.Control.Feedback type="invalid">{errors.Phone}</Form.Control.Feedback>}
              </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group controlId="isHomeCarePatient" className='my-2'>
              <Form.Check type="checkbox" checked={isHomeCarePatient} onChange={(e) => setIsHomeCarePatient(e.target.checked)} label="Are you the Home Care Patient?*" />
              {errors.isHomeCarePatient && <div className="invalid-feedback">{errors.isHomeCarePatient}</div>}
            </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group controlId="hasMedicaid" className='my-2'>
              <Form.Check type="checkbox" checked={hasMedicaid} onChange={(e) => setHasMedicaid(e.target.checked)} label="Do you have Medicaid?" />
              {errors.isHomeCarePatient && <div className="invalid-feedback">{errors.isHomeCarePatient}</div>}
            </Form.Group>
          </div>
          
          </div>

          <Col lg={12} className='d-flex justify-content-center py-4'>
            <Button type='submit' id="gform_submit_button_1">
              Submit
            </Button>
          </Col>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Enroll;
