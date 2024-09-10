import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { gsap } from 'gsap';
import logo1 from "./../../assest/cropped-dhcare-logo-trans-75-1-1.png"
import logo2 from "./../../assest/dhcare-logo-trans-white (1).png"
import RequestACallback from './RequestACallback';
import Enroll from './Enroll';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showModal, setShowModal] = useState(false); // Manage modal state in parent component
  const [showModal2, setShowModal2] = useState(false); // Manage modal state in parent component
console.log(showModal)
  useEffect(() => {
    const threshold = window.innerHeight * 1.2; // This is the threshold at which header becomes sticky
    const offset = 50; // Offset to reduce flickering, only change sticky state after passing offset

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Only change the state when crossing the threshold + offset to avoid small fluctuations
      if (scrollTop >= threshold + offset && !isSticky) {
        setIsSticky(true);
      } else if (scrollTop < threshold - offset && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]); // Dependencies include `isSticky`/ Adding isSticky as a dependency/ Adding `isSticky` as a dependency
  useEffect(() => {
    const mobileMenu = document.querySelector('.mobile-menu');
    // const mobileMenuToggle = //document.querySelector('.mobile-menu-toggle');

    if (isMobileMenuOpen) {
      gsap.to(mobileMenu, {
        duration: 0.5,
        x: 0,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(mobileMenu, {
        duration: 0.5,
        x: '100%',
        ease: 'power2.inOut',
      });
    }
  }, [isMobileMenuOpen]);



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
                  <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={`${index ===0 ?`det-open ` : 'mb-none'} `}>
                    <i className={link.iconClass}></i>
                    {link.label && <p className="social-hide mb-0 bg-white px-1">{link.label}</p>}
                  </a>
                ))}
              </div>
            </div>
        
          <div className="col-4 col-md-4 d-flex justify-content-end gap-2 mb-none">
            <Link  className="head-btn popmake-272 pum-trigger" style={{ cursor: 'pointer' }}  onClick={() => setShowModal2(!showModal2)}>Enroll Now</Link>
            <Link className="head-btn popmake-278 pum-trigger" style={{ cursor: 'pointer' }} onClick={() => setShowModal(!showModal)}>Request A Callback</Link>
          </div>
        </div>

        <div className="row align-items-center second-row">
          <div className="col-5 col-lg-5 col-md-4">
            <div className="site-branding logo-wrap">
              <Link to="/" className="custom-logo-link" rel="home" aria-current="page">
                <img
                  width="75"
                  height="81"
                  src={logo1}
                  className="custom-logo"
                  alt="DHCARE"
                  decoding="async"
                />
              </Link>
            </div>
          </div>

          <div className="col-7 col-md-8 col-lg-7 d-flex justify-content-center     align-items-end mb-0">
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <nav id="site-navigation" className={`main-navigation ${isMobileMenuOpen ? 'is-open' : ''}`}>
              <ul className="d-flex  flex-lg-row menu-item-wrap mb-0">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link className='mega-menu-link' to={item.to} onClick={() => setIsMobileMenuOpen(false)} >{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`${isMobileMenuOpen ? 'mobile-menu open' : 'mobile-menu'}`}>
              {isMobileMenuOpen && (
          
                  <ul>
               <li className='text-end close-icon'><i class="fa fa-times" aria-hidden="true"              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
 ></i>
               </li>
                    <li> <div className="site-branding logo-wrap">
              <Link to="/" className="custom-logo-link bg-design-logo-mb" rel="home" aria-current="page">
              <img class="mega-menu-logo" width="100" alt='sa' height="107" src={logo2}/>
              </Link>
            </div></li>
                    {navItems.map((item, index) => (
                      <li key={index}>
                        <Link to={item.to} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                      </li>
                    ))}

                    <li>
                    <div className="col-12 col-md-12 w-100 d-flex justify-content-center gap-2">
            <Link  className="head-btn popmake-272 pum-trigger" style={{ cursor: 'pointer' }}  onClick={() => {
    setShowModal2(!showModal2);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }}>Enroll Now</Link>
          </div>
          <div className="col-12 col-md-12 d-flex w-100 justify-content-center gap-2 ">

          <Link 
  className="head-btn popmake-278 pum-trigger" 
  style={{ cursor: 'pointer' }} 
  onClick={() => {
    setShowModal(!showModal);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }}
>
  Request A Callback
</Link>          </div>
                    </li>
                  </ul>
          
     
           
              )}



              
              <RequestACallback  getfunc={showModal} functionmodalclose={()=>setShowModal(false)} />
          <Enroll   getfunc2={showModal2} functionmodalclose2={()=>setShowModal2(false)}/>
            </div>
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
     a.custom-logo-link.bg-design-logo-mb {
    width: 100%;
    border-radius: 0;
    border: 0;
    text-align: center !important;
    margin: 0;
    line-height: 100%;
    background: #97b670 !important;
    height: 100%;
    padding: 18px 22px ;
    background: 0 0;
    text-align: left;
    color: #41c2be;
    font-size: 20px;
}
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
          .close-icon{
              color: #4edd28;
                      padding: 10px 22px !important;
                      font-size:20px;
                      margin-bottom:0px !Important;
          }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background-color: #fff;
          // padding: 20px;
          transform: translateX(100%);
        }
.mobile-menu li a{
        border-radius: 0;
        border: 0;
        margin: 0;
        line-height: 100%;
        height: 100%;
        padding: 18px 22px !important;
        background: 0 0;
        text-align: left;
        color: #41c2be;
        font-size: 20px;
}
        .mobile-menu.open {
          transform: translateX(0);
        }

.mobile-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-menu li {
  margin-bottom: 20px;
}

.mobile-menu a {
  color: #333;
  text-decoration: none;
}

.mobile-menu a:hover {
  color: #666;
}
.mobile-menu ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
}

.mobile-menu-toggle {
    background: #97b671 !important;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    border: 0;
    margin: 0;
    font-weight: 600;
    line-height: 100%;
    height: 100%;
    padding: 11px 16px !important;
    background: 0 0;
    text-align: left;
    color: #0c3130;
    font-size: 29px;
}

.mobile-menu-toggle::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.mobile-menu-toggle:hover::before {
  opacity: 1;
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
