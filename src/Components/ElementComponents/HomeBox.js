import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HomeBox = () => {
    const boxesRef = useRef([]);
    const hoverRefs = useRef([]);

    useEffect(() => {
      boxesRef.current.forEach((box, index) => {
        gsap.from(box, {
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset',
          },
          opacity: 0,
          y: 50,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power2.inOut',
        });
        
        const hoverAnim = gsap.to(box, {
            duration: 0.2,
            scale: 1.1,
            ease: 'power2.inOut',
            paused: true,
          });
    
          hoverRefs.current.push(hoverAnim);
    
          box.addEventListener('mouseenter', () => {
            hoverAnim.play();
          });
    
          box.addEventListener('mouseleave', () => {
            hoverAnim.reverse();
          });
        });
      }, []);
    const data = [
        {
          icon: 'fas fa-user-check',
          title: 'Dedicated Staff',
          description: 'Our office staff is professional and will ensure that your loved ones are provided the highest degree of quality care.',
        },
        {
          icon: 'fas fa-peace',
          title: 'Peace of Mind',
          description: 'DHCare, one of the greatest home care agencies in Queens, NY gives clients peace of mind knowing that there is continuous individual support needed for quality, daily living.',
        },
        {
          icon: 'fas fa-hand-holding',
          title: 'Balanced Care',
          description: 'The Balanced Care Method aims to reproduce lifestyle characteristics that establish seniors’ longevity and total fitness.',
        },
        {
          icon: 'fas fa-headset',
          title: 'Ongoing Support',
          description: '“A little help makes a lot of difference”. As your needs change, our ongoing support is only a phone call away.',
        },
        {
          icon: 'fas fa-star',
          title: 'High Caliber Caregivers',
          description: 'Our caregivers are the most qualified, capable, and are dedicated to providing outstanding service.',
        },
        {
          icon: 'fas fa-pills',
          title: 'Cognitive Therapeutics',
          description: 'The Cognitive Therapeutics Method is a fun yet effective activity designed by experts to keep aging minds sharp.',
        },
      ];    
  return (
    <div className="container py-2">
      <div className="row gy-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="sec4bx wpb_column vc_column_container vc_col-sm-4 col-md-6 col-lg-4 col-sm-12"
            ref={(el) => (boxesRef.current[index] = el)}
          >
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="vc_icon_element vc_icon_element-outer vc_do_icon vc_icon_element-align-left vc_icon_element-have-style">
                  <div
                    className="vc_icon_element-inner rounded-3 main-bx-icon vc_icon_element-color-white vc_icon_element-have-style-inner vc_icon_element-size-md vc_icon_element-style-rounded-less vc_icon_element-background vc_icon_element-background-color-custom"
                    style={{ backgroundColor: "#3eb8b3" }}
                  >
                    <span className={`vc_icon_element-icon ${item.icon}`} />
                  </div>
                </div>
                <div className="text-wrap">
                  <p className="">
                    <strong>{item.title}</strong>
                    <br />
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBox