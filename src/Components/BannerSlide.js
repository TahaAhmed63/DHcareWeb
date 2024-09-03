import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay ,Navigation} from 'swiper/modules'; // 
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/effect-fade'; // Fade effect styles
import bannerimg from "./../assest/banner.webp"

const BannerSlide = () => {
  return (
    <div className="main-row" style={{marginTop:" -160px ",}}>
   <Swiper
      modules={[EffectFade, Autoplay]} // Load necessary modules
      effect="fade" // Apply fade effect
      autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay settings
      speed={800} // Transition speed in milliseconds
      loop={true} // Enable looping (even with one slide for smooth experience)

    >
      <SwiperSlide style={{ background: `url(${bannerimg})`, backgroundSize: 'cover', backgroundPosition: 'center',height:'100%' }}>
        <div className="banner-container">
          <div className="banner-text">
            <h1>Quality Home Care</h1>
            <h2>Every Day</h2>
            <button className="cta-button">Our Services</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
 
  );
};

export default BannerSlide;
