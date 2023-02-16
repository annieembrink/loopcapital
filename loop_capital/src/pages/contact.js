import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import ContactAnimationComponent from '@/components/ContactAnimationComponent';
import ContactCardsComponent from '@/components/ContactCardsComponent';

const Contact = (props) => {

    console.log(props)

    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
    const [activeLink, setActiveLink] = useState('Entrepreneur');
    const [clientMessage, setClientMessage] = useState('');
    const [helloMessage, setHelloMessage] = useState('');
    const [wrapperHero, setWrapperHero] = useState(true);

    const buttonOnClick = (message) => {
        setShowForm(true);
        setHelloMessage(message);
        setWrapperHero(false)
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

                {formSubmitted ? <h2>{clientMessage}</h2> :
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

export async function getStaticProps({ preview = false }) {
    try {
      function fetchContactCards() {
        return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/contact-cards')
        .then(res => res.json())
      }
      function fetchHeroSection() {
        return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/hero-section')
        .then (res => res.json())
      }
      const [contactCards, heroSectionData] = await Promise.allSettled([fetchContactCards(), fetchHeroSection()]);
      // Get only portfolio hero-section
      const filterHeroSection = heroSectionData.value.filter(index => index.slug === "contact-hero-section");
      // Get only necesary info for hero-section
      const contactHeroSection = filterHeroSection[0].acf;
      // Get only the portfolio value
      const contactCardsData = contactCards.value[0].acf;
      console.log(contactCards)
      return {
        props: { wpDataJson: {contactCardsData, contactHeroSection}, errormsg: "Nothing to read right now, try again later!" }
      }
    } catch (error) {
      console.error(error);
      return {
        props: {errormsg: "Nothing to read right now, try again later!"}
      }
    }
  }