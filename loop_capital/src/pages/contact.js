import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import ContactAnimationComponent from '@/components/ContactAnimationComponent';
import ContactCardsComponent from '@/components/ContactCardsComponent';

const Contact = () => {

    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
    const [activeLink, setActiveLink] = useState('Entrepreneur');
    const [clientMessage, setClientMessage] = useState('');
    const [helloMessage, setHelloMessage] = useState('');
    const [wrapperHero, setWrapperHero] = useState(true);

    const isBrowser = () => typeof window !== 'undefined';

    const buttonOnClick = (message) => {
        setShowForm(true);
        setHelloMessage(message);
        setWrapperHero(false)

        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
        setClientMessage,
        setWrapperHero
    }

    return (
        <>
            <DefaultLayoutComponent>
                    {wrapperHero ? <ContactAnimationComponent/> : null}

                {formSubmitted ? <h2 className='success-message'>{clientMessage}</h2> :
                    <>{showForm ? <ContactFormComponent {...childProps} /> : <ContactCardsComponent 
                    buttonOnClick={buttonOnClick} 
                    showDivOnClick={showDivOnClick} 
                    activeLink={activeLink} 
                    showDiv={showDiv}/> }</>}

            </DefaultLayoutComponent>
        </>
    );
}

export default Contact;