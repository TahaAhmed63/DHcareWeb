import React from 'react'

const ServicesSec1Design = (props) => {
    const { head, listPoint, rightimg } = props
    console.log(listPoint)
    return (
        <div className="container">
            <div className="row mb-flex-reverse align-items-center">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12 px-5 py-2">
                    <div className="single-page-sec-1 pb-4">
                        <h2 className='text-left' style={{ textAlign: 'left' }}><span style={{ color: "#41294a" }}>{head}</span></h2>

                    </div>
                    <div className="heart-list">
                        <ul>
                            {
                                listPoint?.map((list, index) => (
                                    <li key={index}><i className="fas fa-heart heart"></i>{list}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                    <img className='img-fluid' src={rightimg} alt='sa'/>
                </div>
            </div>
        </div>

    )
}

export default ServicesSec1Design