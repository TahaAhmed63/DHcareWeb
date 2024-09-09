import React from 'react'

const SinglePageBanner = (props) => {
  const {singleimg,singlehead,singlepara}=props
  return (
<section className="toppageheader max-limit">
  <img
    className="img-fluid"
    src={singleimg}
    alt="22"
  />
  <div className="singl-page-main-text">
    <h2>{singlehead}</h2>
    <p>
{singlepara}
    </p>
  </div>
</section>

  )
}

export default SinglePageBanner