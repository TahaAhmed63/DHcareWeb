import React from 'react'

import BannerSlide from '../Components/BannerSlide'
import FormHome from '../Components/FormHome'
import MyMapComponent from '../Components/ElementComponents/MyMapComponent'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'


const Home = () => {
  return (
  <div className='max-limit'>

  <BannerSlide/>
  <FormHome/>
  <MyMapComponent/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>

  </div>
  )
}

export default Home