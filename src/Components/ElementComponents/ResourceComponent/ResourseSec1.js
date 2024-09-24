import React from 'react';

const ResourcesSec1 = (props) => {
    const { head, contentHtml, rightimg, extraclass, alignItem } = props;
    
    return (
        <div className="container">
            <div className="row mb-flex-reverse align-items-center">
                {alignItem === "right" ? (
                    <>
                        <div className="col-12 col-md-6 col-lg-8 col-sm-12 px-5 py-2">
                            <div className="single-page-sec-1 pb-4">
                                <h2 className='text-left' style={{ textAlign: 'left' }}>
                                    <span style={{ color: "#41294a" }}>{head}</span>
                                </h2>
                            </div>
                            <div className="heart-list">
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                            </div>
                        </div>
                        <div className={`col-12 col-md-6 col-lg-4 col-sm-12 rightimg ${extraclass}`}>
                            <img className='img-fluid' src={rightimg} alt='sa' />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`col-12 col-md-6 col-lg-4 col-sm-12 leftimg ${extraclass}`}>
                            <img className='img-fluid' src={rightimg} alt='sa' />
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 col-sm-12 px-5 py-2">
                            <div className="single-page-sec-1 pb-4">
                                <h2 className='text-left' style={{ textAlign: 'left' }}>
                                    <span style={{ color: "#41294a" }}>{head}</span>
                                </h2>
                            </div>
                            <div className="heart-list">
                                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResourcesSec1;
