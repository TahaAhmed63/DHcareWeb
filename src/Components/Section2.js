import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ThemeHeader from './ElementComponents/ThemeHeader';
import HomeSecOneText from './ElementComponents/HomeSecOneText';
import ThemeButton from './ElementComponents/ThemeButton';
import ServicesSliderSlick from './HomeComponents/ServicesSliderSlick';

const Section2 = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Animation for ThemeHeader
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.inOut',
    });

    // Animation for HomeSecOneText
    gsap.from(textRef.current, {
      opacity: 0,
      x: 50,
      duration: 1.2,
      ease: 'power2.inOut',
      stagger: 0.2,
    });

    // Animation for ThemeButton
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: 'power2.inOut',
    });

    // Animation for ServicesSliderSlick
    gsap.from(sliderRef.current, {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <ThemeHeader ref={headerRef} line1head={'Receive your care at home through DHCare ,'} line2head={'one of the best home care agencies in Queens, NY!'} />
      <div className="bg-back-img">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <HomeSecOneText ref={textRef}para1={'Looking for an alternative to a nursing home which may be unfamiliar or too expensive for many people? Are you looking for an amazing home care agency for your loved one but would rather not deal with a complicated process? Going through a long list of home care agencies in NYC is overwhelming but rest assured that you are at the right place! DHCare is one of the best home care agencies in Queens, NY. We bring you a solution that is well received by both elderly dependents and their families.'} para2={'Deciding a source of care is an especially important decision. It is wise to consult the needs and preferences of the person needing care. When doing so, most of us will find that our parents or grandparents prefer to grow old at home and be taken care of by the people they know and trust.'} para3={'Times are changing, and so is the way society deals with certain problems. More and more families opt for alternatives that allow them to face the challenges that come with caring for the elderly while making sure to provide the highest quality of care. DHCare provides a home health aide program that connects you with these exact quality services. Getting older is something natural, a delicate phase in which one must be as comfortable as possible. No more is the nursing home the only viable solution for our elderly relatives. It is only right that our seniors would want to spend their last years surrounded by the people they know and love.'} para4={'Deciding between a nursing home or an in-home attendant may be a challenging and difficult decision. You have to sit down with your aged relative and assess what is feasible for everyone. You might be worried about not being able to care for them properly due to maintaining a full-time job however a nursing home is not as good of an alternative as you might think. Although nursing homes might have trained doctors and nurses, due to cuts in healthcare and problematic conditions, they do not have enough resources to offer the same amount of care and attention an at home health aide can provide.'}/>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <ThemeButton ref={buttonRef} btnText={'View Care Services'}/>
            </div>
          </div>
        </div>
      </div>
      <div className="main-bx-gray">
        <ServicesSliderSlick ref={sliderRef}/>  
      </div>
    </div>
  );
};

export default Section2;