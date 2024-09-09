import React from 'react';

import serviceimg1 from "./../../assest/Group-60.png"
import serviceimg2 from "./../../assest/Group-61-1.png"
import serviceimg3 from "./../../assest/Group-62.png"
import MainServicesDesign from '../ElementComponents/ServicesComponnents/MainServicesDesign';
const ServicesSec3 = () => {
  const data =[ {
    bgColor: '#8ca967',
    heading: 'Consumer Directed Personal Assistance Program',
    headingcolor: '#000',
    paragrah: 'The Consumer Directed Personal Assistance Program or (CDPAP) is a state sponsored Medicaid program that allows you to take control of who provides care to your loved ones. Through this program your eligible family members and friends can determine the quality and type of care they receive.',
    image: serviceimg1,
    imagealignment: 'right'
  },{
    bgColor: '#412949',
    heading: 'Licensed Home Care Services  Agencies',
    headingcolor: '#8ca967',
    paragrah: 'The Licensed Home Care Services Agencies or LCHSA allows for people with Medicaid to choose the type of care they or their loved ones receive. With this initiative, a wider range of patients will have the freedom to access specialized and individualized care from licensed caregivers and nurses.',
    image: serviceimg2,
    imagealignment: 'left'


  },{
    bgColor: '#8ca967',
    heading: 'NHTD',
    headingcolor: '#000',
    paragrah: 'The Nursing Home Transition and Diversion (NHTD) waiver program is designed to assist eligible seniors and individuals with physical disabilities in New York’s Medicaid system to access a wide range of essential services while residing in a community-based environment, as opposed to nursing homes, congregate care facilities, or other institutional settings. We provide the Service Coordination (SC) as well as Home and Community Support Services (HCSS) programs in New York City Region.',
    image: serviceimg3,
    imagealignment: 'right'

  }];

  return (
    <div>
        {
            data.map((data,index)=>(
                <MainServicesDesign
                key={index}
                bgColor={data.bgColor}
                heading={data.heading}
                headingcolor={data.headingcolor}
                paragrah={data.paragrah}
                image={data.image}
                index={index}
                imagealignment={data.imagealignment}
              />
            ))
        }
     
  
    </div>
  );
};

export default ServicesSec3;