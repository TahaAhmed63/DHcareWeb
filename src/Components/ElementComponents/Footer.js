import React from 'react';
import whitelogo from "./../../assest/dhcare-logo-trans-white (1).png"
import { Link } from 'react-router-dom';
import BackToTop from './BacktoTop';
const Footer = () => {
  return (
    <footer id="colophon" className="site-footer max-limit">
      <div className="container">
        <div className="row d-flex justify-content-center gy-2">
          <div className="col-md-12 d-flex justify-content-center py-2">
            <img
              src={whitelogo}
              alt="DHCARE Logo"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>

          <div className="col-md-12 py-2">
            <div className="footer-link-wrap d-flex gap-5 justify-content-center text-white">
              <Link to="">Privacy Policy</Link>
              <Link to="">Cookie Policy</Link>
              <Link to="">FAQ's</Link>
              <Link to="">Blog</Link>
            </div>
          </div>

          <hr className="bb-footer" />

          <div className="col-md-12 footer-link py-2">
            <div className="main-footerlink">
              <div className="d-flex gap-4 social-icons-wrap align-items-center">
                <Link to="tel:(758) 459-0180" className="det-open" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-square-phone"></i>
                  <p className="social-hide mb-0 bg-white px-1">(758) 459-0180</p>
                </Link>

                <Link className="mb-head-none" to="https://www.facebook.com/DHCareNY/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
                <Link className="mb-head-none" to="https://www.linkedin.com/company/dhcare-ny-llc" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link className="mb-head-none" to="https://twitter.com/NyDhcare" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </Link>
                <Link className="mb-head-none" to="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-envelope"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <p className="text-white">172-15 Hillside Avenue Queens, New York 11432</p>
          </div>

          <div className="col-md-12 justify-content-end d-flex credit-tag">
            <p>
              <Link to="https://www.youronlineconversation.com/" target="_blank" rel="noopener noreferrer">
                Design By <span style={{ color: '#AD5DAB' }}>Y</span>
                <span style={{ color: '#34BCED' }}>O</span>
                <span style={{ color: '#79CA88' }}>C</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <BackToTop/>
    </footer>
  );
};

export default Footer;
