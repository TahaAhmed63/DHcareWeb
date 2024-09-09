import React, { useState, useRef } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const FormHome = () => {
    const [name, setName] = useState('');
 
    const [email, setEmail] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xdox6kh', 'template_e7g1kka', form.current, 'LTg0QPyuGiWeZ1LBU')
            .then((result) => {
                console.log(result.text);
                Swal.fire("Email sent successfully!", "Your email has been sent successfully", "success"); // Use Sweet Alert 2 syntax
            }, (error) => {
                console.log(error.text);
                Swal("Failed to send email", "Please try again", "error"); // Use Sweet Alert here
            });
    };
    return (
        <section className="home-bg-form py-2 DHSecHead pt-4">
            <h2 style={{ textAlign: 'center', paddingBottom: "25px" }}>
                <span style={{ color: '#a8c294' }}>Need Help ?</span>
            </h2>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Container>
                        <Row className='gy-5'>
                            <Col lg={4} sm={12} md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    className='home-field-setting'
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                            <Col lg={4} sm={12} md={4}>
                                <Form.Control
                                    type="number"
                                    placeholder="Contact No"
                                    className='home-field-setting'
                                    name="contact"
                                />
                            </Col>
                            <Col lg={4} sm={12} md={4}>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className='home-field-setting'
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Col>
                            <Col lg={12} className='d-flex justify-content-center'>
                                <button type='submit' id="gform_submit_button_1">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form>
        </section>
    );
}

export default FormHome;