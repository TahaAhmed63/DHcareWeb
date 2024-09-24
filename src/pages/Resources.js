import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner';
import bgimage from "./../assest/image-34.webp";
import { Link } from 'react-router-dom';

const Resources = () => {
    const resourceData = [
        {
            title: "Elder abuse",
            desc: "<p>Elder abuse refers to the mistreatment of older adults, including physical, emotional, sexual abuse, financial exploitation, and neglect. It can occur in various settings, including homes, nursing facilities, and assisted living communities.</p>",
            docspath: "elderly-abuse"
        },
        {
            title: "Vaccines for Elderly",
            desc: "<p>Vaccination is crucial for older adults to prevent serious diseases and complications. As people age, their immune systems weaken, making them more susceptible to infections and diseases.</p>",
            docspath: "elderly-vacine"
        },
        {
            title: "Other Resources",
            desc: `<ul><li>Clock In Out</li><li>EVV</li></ul>`,
            docspath: "clock-in-out-instructions"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Resources</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Helmet>
            <MainPagesBanner bgimage={bgimage} pagetitle={'DHCare Resources'} />
            <div className="container">
                <div className="row gy-2">
                    {
                        resourceData.map((resource, index) => (
                            <div className={`${index === 2? 'col-md-12 col-lg-4 d-flex justify-content-center' : 'col-12 col-md-6 col-lg-4'}`} key={index}>

                                <div className={`c-card-wrap aos-init aos-animate `} data-aos="fade-up">
                                    <div className={`c-card text-center ${index=== 0 || index === 2 ? ` same-bx`:``}`}>
                                        <div className="c-card__body">
                                            <h5 className="c-card__title">{resource?.title}</h5>
                                            <div className="c-card__description u-primary-200" 
                                                dangerouslySetInnerHTML={{ __html: resource?.desc }} >
                                            </div>
                                        </div>
                                        <div className="c-card__btn">
                                            <Link to={`/${resource?.docspath}`} className="c-button c-button--secondary">View Resources</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Resources;
