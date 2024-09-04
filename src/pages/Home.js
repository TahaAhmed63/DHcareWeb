import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BannerSlide from '../Components/BannerSlide'
import FormHome from '../Components/FormHome'
import MyMapComponent from '../Components/ElementComponents/MyMapComponent'
import Section2 from '../Components/Section2'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'


const Home = () => {
  return (
  <>
  <Header/>
  <BannerSlide/>
  <FormHome/>
  <MyMapComponent/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Footer/>
  </>
  )
}

export default Home