import React, { useEffect } from 'react'
import ServicesSec1 from '../Components/ServicesSections/ServicesSec1'
import ServicesSec2 from '../Components/ServicesSections/ServicesSec2'
import ServicesSec3 from '../Components/ServicesSections/ServicesSec3'
import ServicesSec4 from '../Components/ServicesSections/ServicesSec4'
import ServicesSec5 from '../Components/ServicesSections/ServicesSec5'
import { Helmet } from 'react-helmet-async'

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
  <Helmet>
        <title> Services</title>
        <meta name="description" content="this are the dhcare Services" />
      </Helmet>


<ServicesSec1/>
<ServicesSec2/>
<ServicesSec3/>
<ServicesSec4/>
<ServicesSec5/>

</>
  )
}

export default Services