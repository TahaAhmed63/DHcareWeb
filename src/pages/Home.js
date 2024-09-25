import React, { useEffect } from 'react'

import BannerSlide from '../Components/BannerSlide'
import FormHome from '../Components/FormHome'
import MyMapComponent from '../Components/ElementComponents/MyMapComponent'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import { Helmet } from 'react-helmet-async'


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <div className='max-limit'>
 <Helmet>
        <title>DHCare</title>
        <meta name="description" content="Frequently Answer Question" />
      </Helmet>
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