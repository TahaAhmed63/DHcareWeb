import React from 'react'

const MainPagesBanner = (props) => {
const {bgimage,pagetitle}=props
// const bannerStyles = {
//     background: `url(${bgimage}) center/cover no-repeat`,
   
//   };
  return (
    <>
    <section className="single-page-banner toppageheader main-pages" style={{background:`url(${bgimage})center/cover no-repeat` }}>
    <div
  className="singl-page-main-text"
  style={{ textAlign: "center", color: "white", padding: "100px 20px" }}
>
  <h2>{pagetitle}</h2>
</div>
   <style jsx>{`.logo-wrap:before {
    content: '';
    position: absolute;
    top: 0;
    background: url(https://dhcare.youronlineconversation.com/wp-content/uploads/2024/08/Ellipse-6.webp);
    width: 100%;
    height: 255px;
    left: 1px;
    background-repeat: no-repeat;
    z-index: -1;
}`} 
    </style>
    </section>

    
    
    </>
  )
}

export default MainPagesBanner