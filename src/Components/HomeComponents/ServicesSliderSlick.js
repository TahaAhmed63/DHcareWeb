import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './ServicesSlider.css';
import serviceimg1 from "./../../assest/New-Project-28.webp"
import serviceimg2 from "./../../assest/New-Project-29.webp"
import serviceimg3 from "./../../assest/New-Project-30.webp"
import serviceimg4 from "./../../assest/New-Project-31.webp"
import serviceimg5 from "./../../assest/New-Project-32.webp"
const ServicesSliderSlick = () => {
    const sliderRef = useRef(null);

    const services = [
        {
          id: 1,
          title: "Nursing",
          description: "Our home care service offers long-term support for patients with existing conditions and daily needs to provide dedicated assistance.",
          image: serviceimg1,
          link: "#service1"
        },
        {
          id: 2,
          title: "Personal Care",
          description: "We can help you access transportation services whether it is for one-time events, or for day to day activities. Your caregiver will supervise or help you outside the home so you can go where you need to without the risk of falling. At home, they will help with transferring from bed to wheelchair. Our home attendants and nurses are fully trained and certified. ",
          image:serviceimg2,
          link: "#service2"
        },
        {
          id: 3,
          title: "Transportation",
          description: "We provide assistance for one-time events or daily needs, with caregivers offering supervision and support outside the home.",
          image: serviceimg3,
          link: "#service3"
        },
        {
          id: 4,
          title: "Nutrition",
          description: " We assist with groceries and healthy meal prep, with aides providing meal planning support to meet patients' needs.",
          image: serviceimg4,
          link: "#service4"
        },
        {
          id: 5,
          title: "Home Care",
          description: "Caring for seniors, disabled, injured, or ill adults can be demanding. Let our home health aides handle it, so you can focus on what matters most. ",
          image:serviceimg5,
          link: "#service5"
        },
 
    
        
      ];
      function updateClasses(index) {
        const slider = sliderRef.current;
      
        if (!slider) return;

        // Clear previous 'first' and 'last' classes
        const slides = slider.innerSlider.list.querySelectorAll('.slick-slide');
        slides.forEach(slide => slide.classList.remove('first', 'last', 'prev'));
        // console.log(slides)
        // Get visible slides
        const visibleSlides = slider.innerSlider.list.querySelectorAll('.slick-active');

        // Apply 'first' class to the first visible slide
        if (visibleSlides.length > 0) {
            const firstSlide = visibleSlides[0];
            firstSlide.classList.add('first');
        
            // Apply 'prev' class to the previous sibling of the first slide
            const prevSlide = firstSlide.previousElementSibling;
            if (prevSlide) {
              prevSlide.classList.add('prev');
            }
          }
        // Apply 'last' class to the fourth visible slide
        if (visibleSlides.length >= 4) {
            visibleSlides[3].classList.add('last');  // 3 corresponds to the fourth element (zero-indexed)
        }
    }

    useEffect(() => {
    updateClasses(0)  // Initial trigger on page load
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        // responsive:true,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: updateClasses,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
             
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrow:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
            },
        ],
    };

   

    return (
        <section className="services-slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                <Slider {...settings} ref={sliderRef}>
           
                {services.map(service => (
                        <div key={service.id} className="service-item">
                            <div className="border-px">
                  <div className="services">
                    <a href={service.link}>
                      <img src={service.image} alt={service.title} />
                    </a>
                    <div className="content-wrap">
                      <div className="pagestitle">
                        <h2>
                          <a href={service.link}>{service.title}</a>
                        </h2>
                      </div>
                      <div className="programtext">
                        <div className="pagesexcerpt">
                          <p>{service.description}</p>
                        </div>
                        <div className="slidrbuttns d-flex justify-content-center">
                          {/* <a href={service.link}>
                            {/* <button className="learn-more" id={service.id}>
                              Learn More
                            </button> 
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                        </div>
                    ))}
            
              
               
                
                </Slider>
                </div>
                </div>
           
                   <style jsx>{`
.slick-slide {
    display: none;
    float: left;
    margin: 0 11px;
    height: 100%;
    overflow: hidden;
    min-height: 1px;
}
   .slick-slide.prev div {
        perspective: 1000px !important;
    transform-style: preserve-3d;
    }
    .slick-slider.slick-initialized {
    height: 600px;
}
.slick-slide.prev div .service-item{
    perspective: 1000px !important;
    transform-style: preserve-3d;
    transform: rotateY(-40deg);
    scale: 0.8;
    position: relative;
    left: 46px;
}
    .slick-slide.slick-active.last div{
            perspective: 1000px !important;
    transform-style: preserve-3d;
    // transform: rotateY(40deg);
    }
.slick-slide.slick-active.last div .service-item{
        perspective: 1000px !important;
    transform-style: preserve-3d;
    transform: rotateY(40deg);
    scale: 0.8;
    position: relative;
    right: 46px;
}
@media only screen and (max-width: 767px) {
         .slick-slider.slick-initialized {
    height: 100%;
}          

}

                   `}</style>
            </div>
        </section>
    );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', right: '-25px' }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', left: '-25px' }}
            onClick={onClick}
        />
    );
};

export default ServicesSliderSlick;
