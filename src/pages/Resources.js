    import React from 'react'
    import { Helmet } from 'react-helmet-async'
    import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner'
    import bgimage from "./../assest/image-34.webp";
    // import { Link } from 'react-router-dom';
    import englishvideo from "./../assest/EVV-Training-English.mp4"
    import chinese from "./../assest/EVV-Training-Chinese.mp4"
    import bangla from "./../assest/EVV-Training-Bangla.mp4"
    import img1 from "./../assest/EVV-SpanishImage.png"
    import pdf from "./../assest/EVV-English (1).pdf"
    import img2 from "./../assest/EVV-BanglaImage (1).png"
    import img3 from "./../assest/EVV-ChineseImage (1).png"
import ThemeButton from '../Components/ElementComponents/ThemeButton';
    const Resources = () => {
    return (
        <>
        <Helmet>
        <title>Resources</title>
        <meta name="description" content="Frequently Answer Question" />
    </Helmet>
            <MainPagesBanner bgimage={bgimage} pagetitle={'DHCare Resources'} />
    <div className="container">
        <div className="row gy-3">
            <div className="col-md-12 col-sm-12 col-lg-12 my-4 ">
            <div className="wpb_wrapper">
    <h2 className="page-title-inner" style={{ textAlign: "center" }}>
        <span style={{ color: "#95b480" }}>Clock In Out</span>
    </h2>

    <h4 className="subtitle" style={{ textAlign: "center" }}>
        <span style={{ color: "#402949" }}>
        <strong>Clock In Out Instructions</strong>
        </span>
    </h4>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-12  justify-content-center">
    <p style={{ textAlign: "center" }}>
    <span style={{ color: "#95b480" }}>
        <strong>English EVV Training Video</strong>
    </span>
    </p>
    <div className="video-wrap">
    <video src={englishvideo} preload="auto" controls="controls" width="350" height="200"></video>
    </div>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-12 justify-content-center">
    <p style={{ textAlign: "center" }}>
    <span style={{ color: "#95b480" }}>
        <strong>বাংলা ইভিভি প্রশিক্ষণ ভিডিও</strong>
    </span>
    </p>
    <div className="video-wrap">
    <video src={bangla} preload="auto" controls="controls" width="350" height="200"></video>
    </div>
    </div>
        <div className="col-md-4 col-lg-4 col-sm-12 justify-content-center">
        <p style={{ textAlign: "center" }}>
        <span style={{ color: "#95b480" }}>
            <strong>英文EVV培训视频</strong>
        </span>
        </p>
        <div className="video-wrap">
        <video src={chinese} preload="auto" controls="controls" width="350" height="200"></video>
        </div>
        </div>

    <div className="col-md-4">
    <img src={img1} alt="" className="img-fluid" />
    </div>
    <div className="col-md-4">
    <img src={img2} alt="" className="img-fluid" />
    </div>
    <div className="col-md-4">
    <img src={img3} alt="" className="img-fluid" />
    </div>

    <div className="col-md-12 d-flex justify-content-center">
        <a href={pdf} target='_blank'  rel="noreferrer">
        
        <ThemeButton btnText={'Download PDF'}  btnRadious={'12px'} backgroundColor={'#9fbb7f'}/>
        </a>
    </div>
            </div>
        </div>


    </>
    )
    }

    export default Resources