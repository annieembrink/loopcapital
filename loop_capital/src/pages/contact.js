
import { useState} from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import { Icon } from '@iconify/react';


const Contact = () => {

    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [clientMessage, setClientMessage] = useState('')
    const [helloMessage, setHelloMessage] = useState('')

    const buttonOnClick = (message) => {
        setShowForm(true)
        setHelloMessage(message)
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
                <ContactFormComponent setShowForm={setShowForm} helloMessage={helloMessage} setHelloMessage={setHelloMessage} setFormSubmitted={setFormSubmitted} setClientMessage={setClientMessage}/>
                :
                <div>
                    <div className="filter-contact-mobile">
                    <p>Contact us!</p>
                    <p>Entrepreneur</p> <p>Investor</p>
                    </div>
                    <div className='hello-contact roboto-font'>
                        <h2>Hello <span className='green-text'>Entrepreneur!</span></h2>
                        <p className='roboto-font'>Are you an entrepreneur who is at the start of your big journey and need help to reach your full potential?</p>
                        <button onClick={() => buttonOnClick('Hello Entrepreneur')}>Let&apos;s get in touch!</button>
                    </div>
                    <div className='hello-contact poppins-font'>
                        <h2>Hello <span className='green-text'>Investor!</span></h2>
                        <p>Are you an investor that wants to be apart of the journey to make Skåne the leading Tech region?</p>
                        <button onClick={() => buttonOnClick('Hello Investor')}>Contact us!</button>
                    </div>
                </div>
            }
            </>
            }
            
        </DefaultLayoutComponent>
    );
}


export default Contact; 