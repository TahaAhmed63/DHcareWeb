import React from 'react'
import ThemeButton from '../ElementComponents/ThemeButton'

const ServicesSec5 = () => {
  return (
<div className="container">
    <div className="row gy-2 justify-content-center">
        <div className="col-md-12 d-flex justify-content-center align-items-center flex-column">
        <h2 style={{ textAlign: "center" }}>
  <span style={{ color: "#97b670" }}>Need more details?</span>
</h2>
<p className='text-center'>Your local team of Client Care Managers are on call 24/7 to answer your questions and work with you to design a customized plan of care that is right for you.</p>
      <div className="d-flex gap-2">
      <ThemeButton btnRadious={'0px !important'}btnText={'Contact us today'}/>
      <ThemeButton btnRadious={'0px !important'}btnText={'Request a Callback'}/>

      </div>
        </div>
   
    </div>
</div>

  )
}

export default ServicesSec5