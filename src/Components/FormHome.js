import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const FormHome = () => {
  return (
   <section className="home-bg-form py-2">
    <h2 style={{textAlign: 'center',paddingBottom:"25px"}}><span style={{color: '#a8c294'}}>Need Help ?</span></h2>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Container>
                    <Row className='gy-5'>
        <Col lg={4 } sm={12} md={4}>
        <Form.Control type="name" placeholder="Name"  className='home-field-setting '/>        
        </Col>
        <Col lg={4 } sm={12} md={4}>
        <Form.Control type="number" placeholder="Contact No"  className='home-field-setting ' />        
        </Col>
        <Col lg={4 } sm={12} md={4}>
        <Form.Control type="Email" placeholder=" email"  className='home-field-setting ' />        
        </Col>
        <Col lg={12 } className='d-flex justify-content-center'>
        <button type='submit' id="gform_submit_button_1">
Submit
        </button>
        </Col>
      
        </Row>

        </Container>

    </Form.Group>
    </Form>
   </section>
  )
}

export default FormHome