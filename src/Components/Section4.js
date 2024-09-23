import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sideimg from "./../assest/Group-56 (1).webp";

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reset',
      },
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.to(imageRef.current, {
      duration: 2,
      y: -10,
      repeat: isMobile ? 0 : -1, // only repeat on non-mobile devices
      yoyo: true,
      ease: 'power2.inOut',
    });

    imageRef.current.addEventListener('mouseenter', () => {
      gsap.to(imageRef.current, {
        duration: 0.2,
        scale: 1.1,
        ease: 'power2.inOut',
      });
    });

    imageRef.current.addEventListener('mouseleave', () => {
      gsap.to(imageRef.current, {
        duration: 0.2,
        scale: 1,
        ease: 'power2.inOut',
      });
    });


    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset'
      }
  });
  //eslint-disable-next-line
  }, []);

  return (
    <section className="bg-sec-purple">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-5 col-md-5">
            <div className="image-wrap-side">
              <img ref={imageRef} src={sideimg} className='img-fluid' alt="" srcset="" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-7 col-md-7 text-left" style={{textAlign:'left'}}>
            <div  className="wpb_text_column wpb_content_element">
              <div className="wpb_wrapper">
                <h3 ref={textRef}>
                  <span style={{ color: "#ffffff" }}>
                    <strong>
                      The satisfaction of our clients stems from our ability to help people
                      navigate though the CDPAP enrollment process while providing ongoing
                      support after activation.
                    </strong>
                  </span>
                </h3>
                <p ref={textRef}>
                  <span style={{ color: "#ffffff" }}>
                    The new sensibility of modern society lays claim to the value of
                    experience. Technological advances in health, heightened levels of
                    education, and the boom in communications have led to the development
                    of new ways to do older actions. Providing care to our loved ones is no
                    different. Our home attendants are committed to providing customers with
                    world-class home health aide service. A fact that is supported by the
                    growth in our client satisfaction over the last few years.
                  </span>
                </p>
                <p ref={textRef} >
                  <span style={{ color: "#ffffff" }}>
                    We continuously work to keep client satisfaction above 95%. These
                    ratings show the exceptional value that our caregivers provide to
                    clients as well as their willingness to go the extra mile to satisfy and
                    exceed clients’ needs. We want to make sure that our home health aide
                    services are done right for your safety. That is why we assure that our
                    home attendants are licensed, experienced, and trained to perform their
                    duties with the utmost efficiency and care. Our vision at DHCare is to
                    become a premier home care agency in Queens, NY, and your preferred home
                    health care agency of choice. To turn this vision into reality, we offer
                    our clients a wide range of home health care services personalized in
                    accordance to their needs. Care at home is not only possible but also
                    desirable in a future that is already here.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;