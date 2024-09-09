// import React, { useEffect, useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay ,Navigation,EffectCoverflow } from 'swiper/modules'; // 
// import 'swiper/css'; // Core Swiper styles
// import serviceimg1 from "./../../assest/New-Project-28.webp"
// import serviceimg2 from "./../../assest/New-Project-29.webp"
// import serviceimg3 from "./../../assest/New-Project-30.webp"
// import serviceimg4 from "./../../assest/New-Project-31.webp"
// import serviceimg5 from "./../../assest/New-Project-32.webp"
// // import 'swiper/css/effect-fade'; // Fade effect styles
// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
// const ServicesSlider = () => {
//       const [swiperInstance, setSwiperInstance] = useState(null);

//     const services = [
//         {
//           id: 1,
//           title: "Nursing",
//           description: "Our excellent home care service is perfect for patients who want long-term health care for their existing conditions and everyday needs. This home health aide program aims to help elderly home patients feel independent through a regular and quality home care program specially designed for senior care. We provide support for home nursing including medication management, 24/7 call access to emergency assistance and more.",
//           image: serviceimg1,
//           link: "#service1"
//         },
//         {
//           id: 2,
//           title: "Personal Care",
//           description: "We can help you access transportation services whether it is for one-time events, or for day to day activities. Your caregiver will supervise or help you outside the home so you can go where you need to without the risk of falling. At home, they will help with transferring from bed to wheelchair. Our home attendants and nurses are fully trained and certified. ",
//           image:serviceimg2,
//           link: "#service2"
//         },
//         {
//           id: 3,
//           title: "Transportation",
//           description: "We can help you access transportation services whether it is for one-time events, or for day to day activities. Your caregiver will supervise or help you outside the home so you can go where you need to without the risk of falling. At home, they will help with transferring from bed to wheelchair. Our home attendants and nurses are fully trained and certified. ",
//           image: serviceimg3,
//           link: "#service3"
//         },
//         {
//           id: 4,
//           title: "Nutrition",
//           description: "We can help you with everyday groceries and healthy meal preparation. Our home health aides understand how important meal planning guidance is to fulfill patients’ nutritional needs. In addition, DHCare can assist you with any special diet accommodations you may need which include but are not limited to health, religious, and cultural restrictions. ",
//           image: serviceimg4,
//           link: "#service4"
//         },
//         {
//           id: 5,
//           title: "Home Care",
//           description: "Homemaker service for seniors, disabled individuals, injured, or ill adults can be a full-time task. Let your home health aide take care of this for you so that you can spend more time with your family and doing the things you enjoy. ",
//           image:serviceimg5,
//           link: "#service5"
//         },
//         {
//           id: 5,
//           title: "Home Care",
//           description: "Homemaker service for seniors, disabled individuals, injured, or ill adults can be a full-time task. Let your home health aide take care of this for you so that you can spend more time with your family and doing the things you enjoy. ",
//           image:serviceimg5,
//           link: "#service5"
//         },
    
        
//       ];
//       const [firstSlideIndex, setFirstSlideIndex] = useState(0);
//       const [lastSlideIndex, setLastSlideIndex] = useState(0);
    
//       const handleSlideChange = (swiper) => {
//         const activeIndex = swiper.activeIndex;
//         const totalSlides = swiper.slides.length;
    
//         // Calculate first and last slide indices (considering loop)
//         const firstSlideIndex = (activeIndex === 0 && totalSlides > 1) ? totalSlides - 1 : activeIndex;
//         const lastSlideIndex = (activeIndex === totalSlides - 1 && totalSlides > 1) ? 0 : activeIndex + 1;
    
//         // Update classes on slides (more efficient approach)
//         swiper.slides.forEach((slide, index) => {
//           slide.classList.remove('first-slide', 'last-slide');
//           if (index === firstSlideIndex) {
//             slide.classList.add('first-slide');
//           } else if (index === lastSlideIndex) {
//             slide.classList.add('last-slide');
//           }
//         });
//       };
    
//   return (
// <>
// <div className="swiper-main">
//                 <div className="swiper-stage-outer">
//                 <div className="row">
//                 <div className="col-12">
//       <Swiper
//           loop={true}
//           spaceBetween={10}
//         //   centeredSlides={true}
//         modules={[Navigation, Autoplay]}
//           slidesPerView={1}
      
//         //   className='container'
//         onSwiper={(swiper) => {
//             setSwiperInstance(swiper);
//             handleSlideChange(swiper); // Set initial classes
//           }}
//           onSlideChange={handleSlideChange}
//           speed={1200}
//           navigation={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 6 }
//           }}
//         >
    

              
      
                
//           {services.map((service, index) => (
//             <div className="col-12">
//    <SwiperSlide key={service.id} className="">
//               <div className="services-slider">
//                 <div className="border-px">
//                   <div className="services">
//                     <a href={service.link}>
//                       <img src={service.image} alt={service.title} />
//                     </a>
//                     <div className="content-wrap">
//                       <div className="pagestitle">
//                         <h2>
//                           <a href={service.link}>{service.title}</a>
//                         </h2>
//                       </div>
//                       <div className="programtext">
//                         <div className="pagesexcerpt">
//                           <p>{service.description}</p>
//                         </div>
//                         <div className="slidrbuttns d-flex justify-content-center">
//                           <a href={service.link}>
//                             <button className="learn-more" id={service.id}>
//                               Learn More
//                             </button>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             </div>
         
//           ))}
 
          
//         </Swiper>
//         <style jsx>{`
//         .services-slider img {
//           width: 100%;
//           height: auto;
//         }

//         .content-wrap {
//           padding: 20px;
//         }

//         .pagestitle h2 {
//           font-size: 1.5rem;
//           margin: 10px 0;
//         }

//         .programtext {
//           margin-top: 10px;
//         }

//         .learn-more {
//           background-color: #007bff;
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           cursor: pointer;
//           font-size: 1rem;
//         }

//         .learn-more:hover {
//           background-color: #0056b3;
//         }

//         .first {
//           border: 2px solid red; /* Visual indicator for the first visible slide */
//         }

//         .last {
//           border: 2px solid blue; /* Visual indicator for the fourth visible slide */
//         }
// .custom-container {
//     max-width: 82%;
//     margin: 0 auto;
//     overflow: hidden;
// }
   
//     .swiper-slide {
//     width: 264px !important;
// }
//         @media (max-width: 600px) {
//           .learn-more {
//             padding: 8px 15px;
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//       </div>
//       </div>
//       </div>
//       </div>
//         </>

  

//   );
// };
 

// export default ServicesSlider
import React from 'react'

const ServicesSlider = () => {
  return (
    <div>ServicesSlider</div>
  )
}

export default ServicesSlider