import React from 'react';

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer max-limit">
      <div className="container">
        <div className="row d-flex justify-content-center gy-2">
          <div className="col-md-12 d-flex justify-content-center py-2">
            <img
              src="https://dhcare.youronlineconversation.com/wp-content/uploads/2024/08/dhcare-logo-trans-white.png"
              alt="DHCARE Logo"
              style={{ width: '100px', height: 'auto' }}
            />
          </div>

          <div className="col-md-12 py-2">
            <div className="footer-link-wrap d-flex gap-5 justify-content-center text-white">
              <a href="">Privacy Policy</a>
              <a href="">Cookie Policy</a>
              <a href="">FAQ's</a>
              <a href="">Blog</a>
            </div>
          </div>

          <hr className="bb-footer" />

          <div className="col-md-12 footer-link py-2">
            <div className="main-footerlink">
              <div className="d-flex gap-4 social-icons-wrap align-items-center">
                <a href="tel:(758) 459-0180" className="det-open" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-square-phone"></i>
                  <p className="social-hide mb-0 bg-white px-1">(758) 459-0180</p>
                </a>

                <a className="mb-head-none" href="https://www.facebook.com/DHCareNY/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a className="mb-head-none" href="https://www.linkedin.com/company/dhcare-ny-llc" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="mb-head-none" href="https://twitter.com/NyDhcare" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </a>
                <a className="mb-head-none" href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-12 text-center">
            <p className="text-white">172-15 Hillside Avenue Queens, New York 11432</p>
          </div>

          <div className="col-md-12 justify-content-end d-flex credit-tag">
            <p>
              <a href="https://www.youronlineconversation.com/" target="_blank" rel="noopener noreferrer">
                Design By <span style={{ color: '#AD5DAB' }}>Y</span>
                <span style={{ color: '#34BCED' }}>O</span>
                <span style={{ color: '#79CA88' }}>C</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <button id="back-to-top" style={{ display: 'block' }}>
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
