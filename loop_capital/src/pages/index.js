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
    <>
      <DefaultLayoutComponent>
        <FixedContactComponent />

        {/* HEROSECTION */}
        <HeroSectionComponent props={props}/>

        <div className="align-item-center two-containers">
          {/* WE CAN OFFER YOU */}
          <WeCanOfferYouComponent/>

          {/* QUOTE */}
          <QuoteComponent/>
        </div>

        {/* COMPONENT TO NUMBERS ON COUNT */}
        <SwingCounterComponent props={props}/>

        {/* JOURNEY MAP */}
          <HexagonComponent/>

        {/* TEXT WITH BORDER */}
        <div className="green-border margin-bottom text-align-center padding-text">
          <h2 className="poppins-font bold-font line-height">
            Skåne will become Sweden&apos;s leading Tech region and build companies active <span className="green-text">all over the world.</span>
          </h2>
        </div>

        {/* COMPONENT CAROUSEL */}
        <CarouselAboutComponent />

        {/* DID WE CATCH YOUR INTEREST */}
        <DidWeCatchYourInterestComponent/>

        {/* COMPONENT DEFAULT LAYOUT */}
      </DefaultLayoutComponent>

    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {

  try {
    let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/startpage-numbers')
    let wpDataJson = await wpData.json()

    return {
      props: { wpDataJson: wpDataJson }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {}
    }
  }
}