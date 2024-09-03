import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BannerSlide from '../Components/BannerSlide'
import FormHome from '../Components/FormHome'
import MyMapComponent from '../Components/ElementComponents/MyMapComponent'
import Section2 from '../Components/Section2'


const Home = () => {
  return (
  <>
  <Header/>
  <BannerSlide/>
  <FormHome/>
  <MyMapComponent/>
  <Section2/>
  <Footer/>
  </>
  )
}

export default Home