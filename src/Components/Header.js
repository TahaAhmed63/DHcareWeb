import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let throttleTimeout = null;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = window.innerHeight * 1.2;

      if (scrollTop >= threshold && !isSticky) {
        setIsSticky(true);
      } else if (scrollTop < threshold && isSticky) {
        setIsSticky(false);
      }
    };

    const throttledScroll = () => {
      if (throttleTimeout) return;
      throttleTimeout = setTimeout(() => {
        handleScroll();
        throttleTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, [isSticky]);



  const socialLinks = [
    { href: 'tel:(758) 459-0180', iconClass: 'fa-solid fa-square-phone', label: '(758) 459-0180' },
    { href: 'https://www.facebook.com/DHCareNY/', iconClass: 'fa-brands fa-square-facebook' },
    { href: 'https://www.linkedin.com/company/dhcare-ny-llc', iconClass: 'fa-brands fa-linkedin' },
    { href: 'https://twitter.com/NyDhcare', iconClass: 'fa-brands fa-square-x-twitter' },
    { href: '#', iconClass: 'fa-solid fa-envelope' },
  ];

  const navItems = [
    { to: '/about-us', label: 'About Us' },
    { to: '/services', label: 'Our Services' },
    { to: '/resources', label: 'DHCARE Resources' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <header id="masthead" className={`site-header max-limit ${isSticky ? 'sticky logo-bg-remove' : ''}`}>
      <div className="container-fluid">
        <div className={`row align-items-center first-row  ${isSticky ? 'scroll-none' : ''}`}>
          <div className="col-12 col-sm-8 col-lg-8 col-md-8 d-flex justify-content-end gap-2">
   
              <div className="d-flex gap-3 social-icons-wrap align-items-center">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="det-open">
                    <i className={link.iconClass}></i>
                    {link.label && <p className="social-hide mb-0 bg-white px-1">{link.label}</p>}
                  </a>
                ))}
              </div>
            </div>
        
          <div className="col-4 col-md-4 d-flex justify-content-end gap-2 mb-none">
            <Link  className="head-btn popmake-272 pum-trigger" style={{ cursor: 'pointer' }}>Enroll Now</Link>
            <Link className="head-btn popmake-278 pum-trigger" style={{ cursor: 'pointer' }}>Request A Callback</Link>
          </div>
        </div>

        <div className="row align-items-center second-row">
          <div className="col-5 col-lg-5 col-md-4">
            <div className="site-branding logo-wrap">
              <Link to="/" className="custom-logo-link" rel="home" aria-current="page">
                <img
                  width="75"
                  height="81"
                  src="https://dhcare.youronlineconversation.com/wp-content/uploads/2024/08/cropped-dhcare-logo-trans-75-1-1.png"
                  className="custom-logo"
                  alt="DHCARE"
                  decoding="async"
                />
              </Link>
            </div>
          </div>

          <div className="col-7 col-md-8 col-lg-7 d-flex justify-content-center align-items-center">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <nav id="site-navigation" className={`main-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}>
              <ul className="d-flex flex-column flex-lg-row menu-item-wrap">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link className='mega-menu-link' to={item.to} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <style jsx>{`
       .sticky {
          position: sticky;
          top: 0;
          background-color: rgb(151, 183, 112);
          box-shadow: 0px 0px 50px #b7adad;
        }
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }
          .main-navigation ul {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
          }
          .main-navigation ul.is-open {
            display: block;
          }
          .menu-item-wrap {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
