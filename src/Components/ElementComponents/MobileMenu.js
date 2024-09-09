import * as React from 'react';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle'; // Assume this is your hamburger toggle
import { Link } from 'react-router-dom';

// Sidebar animation variants
const sidebarVariants = {
  open: {
    clipPath: `circle(2500px at 40px 40px)`,
  
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
    //   marginTop:'-48px',
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navItems = [
    { to: '/about-us', label: 'About Us' },
    { to: '/services', label: 'Our Services' },
    { to: '/resources', label: 'DHCARE Resources' },
    { to: '/faqs', label: 'FAQs' },
    { to: '/blogs', label: 'Blogs' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      style={{
        position: 'fixed',
        top: 0,
        left: `{90%}`,
        marginTop: !isOpen ? '40px' : '0px',  // Conditional logic without template literals
        bottom: 0,
        width: '100%',
        zIndex: 9999,
        backgroundColor: '#fff',
        transition:'0.8s linear',
      }}
    >
      <motion.div className="background-mb" variants={sidebarVariants} />
      <div className="mobile-nav-content">
        <MenuToggle toggle={() => toggleOpen()} />
        <motion.ul className="menu-mobile">
          {navItems.map((item, index) => (
            <motion.li key={index} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
              <Link to={item.to} onClick={() => toggleOpen(false)}>
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <style jsx>{`
        .mobile-nav-content {
          padding: 100px 20px;
        }
        .menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }
        .menu li {
          font-size: 1.5rem;
        }
      `}</style>
    </motion.nav>
  );
};
