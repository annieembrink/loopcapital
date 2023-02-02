
import { useState, useEffect } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

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
                <p>Lorem ipsum dolor sit</p>
            </div>
            
            {formSubmitted ? 
            <h1>{clientMessage}</h1>
            :
            <>
            {showForm ?
                <ContactFormComponent setShowForm={setShowForm} setClientMessage={setClientMessage} setFormSubmitted={setFormSubmitted} helloMessage={helloMessage}/>
                :
                <div>
                    <div className='hello'>
                        <h1>Hello Entrepreneur!</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus ab iusto reiciendis maxime ipsam sint magni alias ut sapiente. Corporis, cum. Fuga mollitia voluptatum officiis harum, minus sequi! Architecto.</p>
                        <button onClick={() => buttonOnClick('Hello Entrepreneur')}>Let&apos;s get in touch!</button>
                    </div>
                    <div className='hello'>
                        <h1>Hello Investor!</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus ab iusto reiciendis maxime ipsam sint magni alias ut sapiente. Corporis, cum. Fuga mollitia voluptatum officiis harum, minus sequi! Architecto.</p>
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