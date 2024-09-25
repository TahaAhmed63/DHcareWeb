import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainServicesDesign = (props) => {
  const { bgColor, heading, headingcolor, paragrah, image, imagealignment, index } = props;
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (imgRef.current && textRef.current) {
      // Set the initial x position based on image alignment
      const imgStartX = imagealignment === 'right' ? 300 :-300 ;

      // Animate the image (slide from off-screen to its final position)
      gsap.from(imgRef.current, {
        x: imgStartX, // Dynamic based on alignment
        duration: 1.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imgRef.current,
          start: isMobile ? 'top 90%' : 'top 80%', // Different trigger points for mobile
          end: isMobile ? 'bottom 10%' : 'bottom 20%', // Adjusted for mobile
          toggleActions: 'play none none none', // Run once, no reverse or replay
        },
      });

      // Animate the text (simple y-axis translation)
   
    }
  }, [imagealignment]);

  return (
    <section
      className="single-page-bg-1 mb-flex-reverse max-limit"
      style={{
        background: bgColor,
        marginTop: '100px',
        marginBottom: '100px',
        position: 'relative',
      }}
    >
      <div className="container">
        <div className={`row align-items-center${(index === 0 || index === 2 || index === 4 || index === 6) ? ' mb-flex-reverse' : ''}`}>
          {imagealignment === 'right' ? (
            <>
              <div className="col-lg-1 col-md-1"></div>
              <div className="col-lg-6 col-12 col-md-6 py-5">
                <h2 ref={textRef}>
                  <span style={{ color: headingcolor }}>{heading}</span>
                </h2>
                <p className="text-white">{paragrah}</p>
              </div>
              <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                <div className="single-col-img">
                  <div className="vc_column-inner">
                    <img ref={imgRef} src={image} className="" alt="sa" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                <div className="single-col-img">
                  <div className="vc_column-inner">
                    <img ref={imgRef} src={image} className="" alt="sas" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 col-md-6 py-5">
                <h2 ref={textRef}>
                  <span style={{ color: headingcolor }}>{heading}</span>
                </h2>
                <p className="text-white">{paragrah}</p>
              </div>
              <div className="col-lg-1 col-md-1"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainServicesDesign;
