import React from 'react'
import ThemeHeader from './ElementComponents/ThemeHeader'
import TestimonialCarousel from './HomeComponents/TestimonialCarousel'

const Section5 = () => {
  return (
    <>
    <div className="container">
<ThemeHeader line1head={'Read below what our clients have to say and learn more about'} line2head={'what makes us the premier provider of in-home senior care.'} />

    </div>
    <TestimonialCarousel/>
    </>
  )
}

export default Section5