import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const MainServicesDesign = (props) => {
    const { bgColor, heading, headingcolor, paragrah, image, imagealignment, index } = props
    const imgRef = useRef(null);
    const textRef = useRef(null);
    useLayoutEffect(() => {
        if (imgRef.current && textRef.current) {
   gsap.to(imgRef.current, {
            x: 0,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: imgRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
            },
          });
      
        gsap.to(textRef.current, {
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play reverse play reverse',
            },
          });
     
      
        
        }
      }, [imagealignment]);

    return (
        <section className="single-page-bg-1 mb-flex-reverse max-limit" style={{ background: bgColor, marginTop: '100px', marginBottom: '100px', position: 'relative' }}>
            <div className="container">
                <div className={`row align-items-center${(index === 0 || index === 2 || index === 4 || index === 6) ? ' mb-flex-reverse' : ''}`}>
                    {
                        imagealignment === 'right' ? (
                            <>
                                <div className="col-lg-1 col-md-1">

                                </div>

                                <div className="col-lg-6 col-12 col-md-6  py-5">
                                    <h2 ref={textRef}>
                                        <span style={{ color: headingcolor }}>
                                            {heading}

                                        </span>
                                    </h2>
                                    <p className='text-white'>
                                        {paragrah}
                                    </p>
                                </div>
                                <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                                    <div className="single-col-img">
                                        <div className="vc_column-inner">
                                            <img ref={imgRef} src={image} className='' alt='sa' />
                                        </div>
                                    </div>

                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                                    <div className="single-col-img">
                                        <div className="vc_column-inner">
                                            <img ref={imgRef} src={image} className='' alt='sas' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 col-md-6  py-5">
                                    <h2 ref={textRef}>
                                        <span style={{ color: headingcolor }}>
                                            {heading}

                                        </span>
                                    </h2>
                                    <p className='text-white'>
                                        {paragrah}
                                    </p>
                                </div>
                                <div className="col-lg-1 col-md-1">

                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MainServicesDesign