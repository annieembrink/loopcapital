import { useState} from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

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

            <div className="hero-section">
                <h1>Let&apos;s start this journey <span className="green-text">together!</span></h1>
                <p className='p-hero'>Just fill in the form or send us an email!</p>
            </div>
            
            {formSubmitted ? 
            <h1>{clientMessage}</h1>
            :
            <>
            {showForm ?
                <ContactFormComponent {...childProps}/>
                :

            <div className='wrapper-contact'>
                <div className="filter-contact-mobile">
                    <p>Contact us!</p>
                    <p style={{textDecoration: activeLink === 'Entrepreneur' ? 'underline' : 'none'}} onClick={(e) => showDivOnClick(e)}>Entrepreneur</p>
                    <p style={{textDecoration: activeLink === 'Investor' ? 'underline' : 'none'}} onClick={(e) => showDivOnClick(e)}>Investor</p>
                </div>

                <div hidden={!showDiv} className='hello-contact roboto-font'>
                        <h2>Hello <span className='green-text'>Entrepreneur!</span></h2>
                        <p className='roboto-font'>Are you an entrepreneur who is at the start of your big journey and need help to reach your full potential?</p>
                        <Button onClick={() => buttonOnClick('Hello Entrepreneur')}>Let&apos;s get in touch!</Button>
                </div>

                <div hidden={showDiv} className='hello-contact poppins-font'>
                        <h2>Hello <span className='green-text'>Investor!</span></h2>
                        <p>Are you an investor that wants to be apart of the journey to make Skåne the leading Tech region?</p>
                        <Button onClick={() => buttonOnClick('Hello Investor')}>Contact us!</Button>
                </div>
            </div>
            }
            </>
            }
            
        </DefaultLayoutComponent>
    );
}


export default Contact; 