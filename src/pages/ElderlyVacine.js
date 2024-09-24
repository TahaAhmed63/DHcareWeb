import React from 'react';
import bgimage from "./../assest/image-34.webp";
import { Helmet } from 'react-helmet-async';
import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner';
import vacineimg from "./../assest/vacination (1).png";
import { Link } from 'react-router-dom';

const ElderlyVacine = () => {

    // Data array to render sections dynamically
    const vaccineData = [
        {
            title: "CDC Adult Immunization",
            description: "Comprehensive information on vaccines recommended for adults, including older adults.",
            source: "National Institute on Aging (NIA) - Vaccines for Older Adults",
            link: "https://www.cdc.gov/vaccines-adults/?CDC_AAref_Val=https://www.cdc.gov/vaccines/adults/index.html",
        },
        {
            title: "NIA Vaccines",
            description: "Details on vaccines specifically for older adults, including recommendations and importance.",
            source: "American Academy of Family Physicians (AAFP) - Immunizations for Older Adults",
            link: "https://www.nia.nih.gov/health/immunizations-and-vaccines/vaccinations-and-older-adults",
        },
        {
            title: "AAFP Vaccination",
            description: "Guidelines and recommendations for vaccinating older adults.",
            source: "New York State Vaccines for Adult Programs - New York Department of Health",
            link: "https://www.aafp.org/family-physician/patient-care/prevention-wellness/immunizations-vaccines.html",
        },
        {
            title: "VFA Vaccine",
            description: "The New York State Vaccines for Adults (VFA) Program provides vaccines at no cost to eligible adults.",
            source: "New York Department of Health",
            link: "https://www.health.ny.gov/prevention/immunization/providers/state_vaccines_for_adults_program.htm",
        }
    ];

    return (
        <div>
            <Helmet>
                <title>Elderly Vaccine</title>
                <meta name="description" content="Frequently Asked Questions" />
            </Helmet>
            <MainPagesBanner bgimage={bgimage} pagetitle={'Elderly Vaccine'} />
            <div className="row mb-3 text-wraper">
                <div className="col-12">
                    <div className="text-wrap d-flex justify-content-center w-75 mx-auto">
                        <strong className='text-center'>
                            Vaccination is crucial for older adults to prevent serious diseases and complications. As people age, their immune systems weaken, making them more susceptible to infections and diseases.
                            Centers for Disease Control and Prevention (CDC) - Vaccines for Adults
                        </strong>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <div className="row d-flex justify-content-center gy-5">
                    {
                        vaccineData.map((vaccine, index) => (
                            <div className="col-md-4 col-lg-4 col-12" key={index}>
                                <div className="bx-wrap-vacine">
                                    <img src={vacineimg} className='img-fluid py-2' alt={vaccine.title} />
                                    <h2>{vaccine.title}</h2>
                                    <p>{vaccine.description}</p>
                                    <p>{vaccine.source}</p>
                                    <div className="c-card__btn">
                                        <Link to={ vaccine?.link } target="_blank" rel="noreferrer" className="c-button c-button--secondary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ElderlyVacine;
