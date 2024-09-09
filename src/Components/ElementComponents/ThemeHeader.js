import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThemeHeader = (props) => {
  const { line1head, line2head } = props;
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, []);
  useEffect(() => {
    const header = headerRef.current;
    gsap.to(header, {
      duration: 0.2,
      scale: 1.1,
      ease: 'power2.inOut',
      paused: true,
    });
  
    header.addEventListener('mouseenter', () => {
      gsap.to(header, {
        duration: 0.2,
        scale: 1.1,
        ease: 'power2.inOut',
      });
    });
  
    header.addEventListener('mouseleave', () => {
      gsap.to(header, {
        duration: 0.2,
        scale: 1,
        ease: 'power2.inOut',
      });
    });
  }, []);
  return (
    <div className="section-heads py-2" ref={headerRef}>
      <div className="wpb_text_column wpb_content_element section-heads">
        <div className="wpb_wrapper">
          <h2 style={{ textAlign: "center" }}>
            {line1head}
            <br />
            {line2head}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ThemeHeader;