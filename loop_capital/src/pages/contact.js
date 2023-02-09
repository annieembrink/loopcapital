import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';


const Contact = () => {

    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
    const [activeLink, setActiveLink] = useState('Entrepreneur');
    const [clientMessage, setClientMessage] = useState('');
    const [helloMessage, setHelloMessage] = useState('');

    const buttonOnClick = (message) => {
        setShowForm(true);
        setHelloMessage(message);
    };

    const showDivOnClick = (e) => {
        if (e.target.textContent !== activeLink) {
            setShowDiv(!showDiv);
            setActiveLink(e.target.textContent);
        };
    };

    const childProps = {
        setShowForm,
        helloMessage,
        setHelloMessage,
        setFormSubmitted,
        setClientMessage
    }

    return (
        <DefaultLayoutComponent>

            <div className="hero-section-contact">
                <div className="wrapper-hero">
                <h1 data-aos="fade-right" data-aos-duration="600">Let&apos;s start this journey <span className="animated-text">
                    <span data-aos="fade-right" data-aos-duration="800">t</span>
                    <span data-aos="fade-right" data-aos-duration="1100">o</span>
                    <span data-aos="fade-right" data-aos-duration="1400">g</span>
                    <span data-aos="fade-right" data-aos-duration="1700">e</span>
                    <span data-aos="fade-right" data-aos-duration="2000">t</span>
                    <span data-aos="fade-right" data-aos-duration="2300">h</span>
                    <span data-aos="fade-right" data-aos-duration="2600">e</span>
                    <span data-aos="fade-right" data-aos-duration="2900">r</span>
                    <span data-aos="fade-right" data-aos-duration="3000">!</span>
                </span>
                </h1>
                <p className='p-hero roboto-font' data-aos="fade-right" data-aos-duration="800">Just fill in the form or send us an email!</p>
                </div>
                {formSubmitted ?
                    <h1>{clientMessage}</h1>
                    :
                    <>
                        {showForm ?
                            <ContactFormComponent {...childProps} />
                            :

                            <div className='wrapper-contact section-2'>
                                <div className="filter-contact-mobile">
                                    <p>Contact us!</p>
                                    <p style={{ textDecoration: activeLink === 'Entrepreneur' ? 'underline' : 'none' }} onClick={(e) => showDivOnClick(e)}>Entrepreneur</p>
                                    <p style={{ textDecoration: activeLink === 'Investor' ? 'underline' : 'none' }} onClick={(e) => showDivOnClick(e)}>Investor</p>
                                </div>

                                <div className={`hello-contact roboto-font grid-row-box ${!showDiv ? 'hidden-on-mobile' : null}`}>
                                    <div className='align-h2'><h2 className='font-bold'>Hello <span className='green-text'>Entrepreneur!</span></h2></div>
                                    <p>Are you an entrepreneur who is at the start of your big journey and need help to reach your full potential?</p>
                                    <div><Button onClick={() => buttonOnClick('Hello Entrepreneur')}>Let&apos;s get in touch!</Button></div>
                                </div>

                                <div className={`hello-contact poppins-font grid-row-box ${showDiv ? 'hidden-on-mobile' : null}`}>
                                    <div><h2>Hello <span className='green-text'>Investor!</span></h2></div>
                                    <p>Are you an investor that wants to be apart of the journey to make Skåne the leading Tech region?</p>
                                    <div><Button onClick={() => buttonOnClick('Hello Investor')}>Contact us!</Button></div>
                                </div>

                            </div>
                        }
                    </>
                }
            </div>


        </DefaultLayoutComponent>
    );
}


export default Contact; 