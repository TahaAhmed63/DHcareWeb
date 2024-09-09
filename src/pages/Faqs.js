import React, { useState } from 'react';
import MainPagesBanner from '../Components/ElementComponents/MainPagesBanner';
import bgimage from "./../assest/image-34.webp";
import { Accordion, Card, Col, Row, useAccordionButton } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

import leftimg from "./../assest/caring-585x390-1.jpg"
// Custom Toggle component for Accordion
const CustomToggle = ({ children, eventKey, activeKey, onToggle }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () => onToggle(eventKey));

  return (
    <div onClick={decoratedOnClick} className="custom-toggle">
      <span className="icon">
        {activeKey === eventKey ? <FaMinus /> : <FaPlus />}
      </span>
      {children}
    </div>
  );
};

const Faqs = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const faqData = [
    {
      question: 'What is CDPAP/Home Care?',
      answer: 'CDPAP/Home Care is a Medicaid program that allows consumers to hire their own caregivers, including family and friends, to provide personal care services.'
    },
    {
      question: 'What is LCHSA?',
      answer: 'LCHSA stands for Licensed Home Care Services Agency. It is a licensed entity that provides home care services.'
    },
    {
      question: 'What are the requirements for home care?',
      answer: 'Requirements for home care include being Medicaid-eligible and having a medical need for personal care services.'
    },
    {
      question: 'Who chooses my care provider?',
      answer: 'For your home care service, you have full control over who provides you with your at-home assistance. DHCare will make sure that your caregiver of choice is properly educated in administering care.'
    },
    {
      question: 'What are the requirements for being a caregiver?',
      answer: 'Caregivers must be legally eligible to work and capable of providing the necessary care. They may also need to undergo training and certification, depending on the state and agency.'
    },
    {
      question: 'How long does the Home Care approval process take?',
      answer: 'The approval process can vary, but it typically takes between 2 to 4 weeks, depending on the complexity of the case and Medicaid processing times.'
    },
    {
      question: 'What are DHCare\'s Hours of Operation?',
      answer: 'DHCare is available Monday through Friday from 9 AM to 5 PM. Emergency services are available outside of these hours.'
    },
    {
      question: 'Is my Medicaid Insurance affected by Home Care?',
      answer: 'No, enrolling in home care services should not affect your Medicaid insurance coverage.'
    },
    {
      question: 'Why DHCare?',
      answer: 'DHCare provides a personalized approach to home care, ensuring that you receive the best possible care from a caregiver of your choice.'
    }
  ];

  return (
    <>
      <MainPagesBanner bgimage={bgimage} pagetitle={'Faqs'} />


        <Row className='max-limit'>
          <Col md={6} className='faqs-bg' >
          <div className="vc_column-inner" style={{background:`url(${leftimg})`,}}>
            
          </div>
          </Col>
          <Col md={6}>
            <h2 className=" mb-4 text-center" style={{color:' rgb(139, 170, 71)'}}> Frequently Asked Questions</h2>

            <Accordion activeKey={activeKey}>
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Card.Header>
                    <CustomToggle
                      eventKey={String(index)}
                      activeKey={activeKey}
                      onToggle={toggleAccordion}
                    >
                      {faq.question}
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
   

      <style jsx>{`
        h1 {
          color: #8baa47;
        }

        .custom-toggle {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #8baa47;
          font-size: 18px;
          font-weight: bold;
          color: #8baa47;
        }

        .custom-toggle:hover {
          cursor: pointer;
          background-color: #f8f8f8;
        }

        .icon {
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon svg {
          color: #8baa47;
          width: 16px;
          height: 16px;
        }

        .accordion-item:last-child .custom-toggle {
          border-bottom: none;
        }

        .accordion-body {
          padding: 15px;
          border-bottom: 1px solid #8baa47;
          color: #fff;
          font-weight:600;
          background: rgb(139, 170, 71);

        }
      `}</style>
    </>
  );
};

export default Faqs;
