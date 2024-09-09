import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe, FaPhone, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaEnvelope } from 'react-icons/fa';
// import './SocialSection.css'; // Custom CSS for additional styling

const SocialSection = () => {
  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col sm={2}></Col>

        <Col sm={4} className="Socail-box">
          <div className="vc_column-inner text-center">
            <div className="vc_icon_element vc_icon_element-outer vc_do_icon vc_icon_element-align-center vc_icon_element-have-style">
              <div
                className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-have-style-inner vc_icon_element-size-lg vc_icon_element-style-rounded vc_icon_element-background"
                style={{ backgroundColor: '#97b770' }}
              >
                <FaGlobe size={50} color="white" />
              </div>
            </div>
            <h2>Social</h2>
            <div className="d-flex gap-2 my-2 socail-icons-wrap align-items-center justify-content-center">
              <FaPhone size={40} />
              <FaFacebookSquare size={40} />
              <FaLinkedin size={40} />
              <FaTwitterSquare size={40} />
              <FaEnvelope size={40} />
            </div>
          </div>
        </Col>

        <Col sm={4} className="Socail-box">
          <div className="vc_column-inner text-center">
            <div className="vc_icon_element vc_icon_element-outer vc_do_icon vc_icon_element-align-center vc_icon_element-have-style">
              <div
                className="vc_icon_element-inner vc_icon_element-color-white vc_icon_element-have-style-inner vc_icon_element-size-lg vc_icon_element-style-rounded vc_icon_element-background"
                style={{ backgroundColor: '#97b770' }}
              >
                <FaEnvelope size={50} color="white" />
              </div>
            </div>
            <h2>Email</h2>
            <p>
              <a href="mailto:info@dhcareny.com" style={{ color: '#97b770', fontWeight: 'bold' }}>
                info@dhcareny.com
              </a>
            </p>
          </div>
        </Col>

        <Col sm={2}></Col>
      </Row>
    </Container>
  );
};

export default SocialSection;
