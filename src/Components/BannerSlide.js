import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/effect-fade'; 
import bannerimg from "./../assest/banner.webp";
import { gsap } from 'gsap';

const BannerSlide = () => {
    const bannerRef = useRef(null);
    const swiperRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline();
  
      tl.from(bannerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: 'power2.inOut',
      })
      .from(swiperRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.8,
        ease: 'power2.inOut',
      }, '-=0.5')
      .from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 2,
        ease: 'power2.inOut',
        stagger: 0.2,
      }, '-=0.5')
      .from(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 2.5,
        ease: 'power2.inOut',
      }, '-=0.5');
  
      // Add event listener for gesture
      swiperRef.current.addEventListener('touchmove', (e) => {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        gsap.to(imageRef.current, {
          duration: 0.5,
          x: x / 100,
          y: y / 100,
          ease: 'power2.inOut',
        });
      });
  
      swiperRef.current.addEventListener('touchend', () => {
        gsap.to(imageRef.current, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'power2.inOut',
        });
      });
  
      // Add hover effect to button
      buttonRef.current.addEventListener('mouseover', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          scale: 1.1,
          ease: 'power2.inOut',
        });
      });
  
      buttonRef.current.addEventListener('mouseout', () => {
        gsap.to(buttonRef.current, {
          duration: 0.3,
          scale: 1,
          ease: 'power2.inOut',
        });
      });
  
      // Add click effect to button
      buttonRef.current.addEventListener('click', () => {
        gsap.to(buttonRef.current, {
          duration: 0.5,
          scale: 0.9,
          ease: 'power2.inOut',
        });
        gsap.to(buttonRef.current, {
          duration: 0.5,
          scale: 1,
          ease: 'power2.inOut',
          delay: 0.5,
        });
      });
    }, []);

  return (
    <div className="main-row" style={{marginTop:" -160px "}} ref={bannerRef}>
      <Swiper
        modules={[EffectFade, Autoplay]} 
        effect="fade" 
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        speed={800} 
        loop={true} 
        ref={swiperRef}
      >
        <SwiperSlide className='main-banner'>
          <div className="banner-container">
            <img ref={imageRef} src={bannerimg} alt="Banner-Image" />
            <div className="banner-text" ref={textRef}>
              <h1>Quality Home Care</h1>
              <h2>Every Day</h2>
              <button className="cta-button" ref={buttonRef}>Our Services</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <style jsx>{`
                .banner-container img {
                    filter: brightness(1);
                    transition: filter 0.5s ease-in-out;
                    object-fit: cover;
                    width: 100%;
                    height: 900px;
                    /* display: none; */
                }
                .banner-container img:hover {
                    filter: brightness(1.5);
                }

                /* Add responsive design tweaks */
                @media only screen and (max-width: 768px) {
                    .banner-container img {
                        height: 500px;
                    }
                    .banner-text {
                        font-size: 18px;
                    }
                    .cta-button {
                        font-size: 16px;
                        padding: 10px 20px;
                    }
                }
                @media only screen and (max-width: 480px) {
                     .banner-container img {
        height: 100%;
    }
                    .banner-text {
                        font-size: 14px;
                    }
          .cta-button {
        font-size: 3vw;
        padding: 2px 16px;
        line-height: 3vh;
    }
                }
            `}</style>
    </div>
  );
};

export default BannerSlide;