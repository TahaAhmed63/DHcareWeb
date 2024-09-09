import React from 'react'

const MainServicesDesign = (props) => {
    const { bgColor, heading, headingcolor, paragrah, image, imagealignment, index } = props
    return (
        <section className="single-page-bg-1 mb-flex-reverse max-limit" style={{ background: bgColor, marginTop: '100px', marginBottom: '100px', position: 'relative' }}>
            <div className="container">
                <div className={`row align-items-center${(index === 0 || index === 2 || index === 4 || index === 6) ? ' mb-flex-reverse' : ''}`}>
                    {
                        imagealignment === 'right' ? <>
                            <div className="col-lg-1 col-md-1">

                            </div>

                            <div className="col-lg-6 col-12 col-md-6  py-5">
                                <h2>
                                    <span style={{ color: headingcolor }}>
                                        {heading}

                                    </span>
                                </h2>
                                <p className='text-white'>
                                    {paragrah}
                                </p>
                            </div>
                            <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                                <div className="single-col-img">
                                    <div className="vc_column-inner">
                                        <img src={image} className='' alt='sa' />
                                    </div>
                                </div>

                            </div>
                        </> : <>
                            <div className="col-lg-5 col-md-5 co-12 img-sec-wrap">
                                <div className="single-col-img">
                                    <div className="vc_column-inner">
                                        <img src={image} className='' alt='sas'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 col-md-6  py-5">
                                <h2>
                                    <span style={{ color: headingcolor }}>
                                        {heading}

                                    </span>
                                </h2>
                                <p className='text-white'>
                                    {paragrah}
                                </p>
                            </div>
                            <div className="col-lg-1 col-md-1">

                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default MainServicesDesign