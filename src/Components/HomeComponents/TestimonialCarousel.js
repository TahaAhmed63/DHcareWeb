import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import personimg from "./../../assest/New-Project-39.webp";
import { Link } from 'react-router-dom';

const TestimonialCarousel = () => {
  const services = [
    {
      id: 1,
      description: "I am more than fully satisfied with the excellent service provided so clearly and so sincerely by each and every caregiver.",
      image: personimg, // Assuming you're using the same image for all
    },
    {
      id: 2,
      description: "Thanks to DHCare I am able to provide my mother with the care and attention that she needs. I was so happy to hear that I would not have to use traditional care facilities.",
      image: personimg, // Assuming you're using the same image for all
    },
    {
      id: 3,
      description: "My mom’s primary caregiver is wonderful. The nurse is great, and the overall experience has been splendid as well. I cannot imagine enrolling in another service.",
      image: personimg, // Assuming you're using the same image for all
    },
  ];

  return (
    <Swiper
      loop={true} // Enables infinite looping
      spaceBetween={10}
      slidesPerView={1}
      
      autoplay={{ delay: 2500, disableOnInteraction: false }} // Adds autoplay functionality
      navigation // Enables navigation arrows
    //   effect="coverflow" // Optional: Adds a coverflow effect
      modules={[Autoplay, Navigation]}
      breakpoints={{
        640: {  navigation:false },
      
      }}
    className='testimonial-carousel'
    >

      {services.map(service => (
        <SwiperSlide key={service.id}>
          <div className="testi-box">
            <Link to={''}>
              <img
                loading="lazy"
                decoding="async"
                width={200}
                height={200}
                src={service.image}
                alt=""
              />
            </Link>
            <div className="description">
              <p>{service.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
