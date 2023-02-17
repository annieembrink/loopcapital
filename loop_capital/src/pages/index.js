// COMPONENT IMPORTS
import CarouselAboutComponent from "@/components/CarouselAboutComponent";
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import SwingCounterComponent from "@/components/SwingCounterComponent";
import FixedContactComponent from "@/components//FixedContactComponent";
import HexagonComponent from "@/components/HexagonComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import WeCanOfferYouComponent from "@/components/WeCanOfferYouComponent";
import QuoteComponent from "@/components/QuoteComponent";
import DidWeCatchYourInterestComponent from "@/components/DidWeCatchYourInterestComponent";

export default function Home(props) {
  
  return (
 
    <DefaultLayoutComponent>
        <FixedContactComponent />

        {/* HEROSECTION */}
        <HeroSectionComponent props={props.wpDataJson.startpageHeroSection}/>

        <div className="align-item-center two-containers">
          {/* WE CAN OFFER YOU */}
          <WeCanOfferYouComponent props={props.wpDataJson.weOfferYouData}/>

          {/* QUOTE */}
          <QuoteComponent props={props.wpDataJson.quoteData}/>
        </div>

        {/* COMPONENT TO NUMBERS ON COUNT */}
        <SwingCounterComponent props={props.wpDataJson.numbersData}/> 

        {/* JOURNEY MAP */}
        <HexagonComponent props={props.wpDataJson.journeyData}/>

        {/* TEXT WITH BORDER */}
        <div className="green-border margin-bottom text-align-center padding-text">
          <h2 className="poppins-font bold-font line-height">
            {props.wpDataJson.visionData[0].acf.loop_capitals_vision} <span className="green-text">{props.wpDataJson.visionData[0].acf.green_text_vision}</span> 
          </h2>
        </div>

        {/* COMPONENT CAROUSEL */}
        <CarouselAboutComponent props={props.wpDataJson.carouselData}/>

        {/* DID WE CATCH YOUR INTEREST */}
        <DidWeCatchYourInterestComponent/>

        {/* COMPONENT DEFAULT LAYOUT */}
      </DefaultLayoutComponent>
    </>
  )
}

export async function getStaticProps({ preview = false }) {

  try {
    function fetchHeroSection() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/hero-section')
      .then (res => res.json())
    }
    function fetchWeOfferYou() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/we-offer-you')
      .then(res => res.json())
    }
    function fetchQuote() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/quote')
      .then(res => res.json())
    }
    function fetchNumbers() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/startpage-numbers')
      .then(res => res.json())
    }
    function fetchJourney() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/journey')
      .then(res => res.json())
    }
    function fetchVision() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/vision')
      .then(res => res.json())
    }
    function fetchCarousel() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/carousel')
      .then(res => res.json())
    }

    const [heroSectionData, weOfferYou, quote, numbers, journey, vision, carousel] = await Promise.allSettled(
        [fetchHeroSection(), fetchWeOfferYou(),fetchQuote(),
         fetchNumbers(), fetchJourney(), fetchVision(), fetchCarousel()]);
    // Get only portfolio hero-section
    const filterHeroSection = heroSectionData.value.filter(index => index.slug === "startpage-hero-section");
    // Get only necesary info for hero-section
    const startpageHeroSection = filterHeroSection[0].acf;
    // Get only the value
    const weOfferYouData = weOfferYou.value;
    const quoteData = quote.value;
    const numbersData = numbers.value;
    const journeyData = journey.value;
    const visionData = vision.value;
    const carouselData = carousel.value;
    return {
      props: { wpDataJson: {startpageHeroSection, weOfferYouData, quoteData, numbersData, journeyData, visionData, carouselData}, errormsg: "Nothing to read right now, try again later!" }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }
}