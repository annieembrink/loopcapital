// COMPONENT IMPORTS
import CarouselAboutComponent from "@/components/CarouselAboutComponent";
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import SwingCounterComponent from "@/components/SwingCounterComponent";
import FixedContactComponent from "@/components//FixedContactComponent";
import HexagonComponent from "@/components/HexagonComponent";
import HeroSectionComponent from "@/components/HeroSectionComponent";
import WeCanOfferYouComponent from "@/components/WeCanOfferYouComponent";
import QuoteComponent from "@/components/QuoteComponent";

// REACT/NEXT IMPORTS
import Link from "next/link";
import * as Icon from 'react-bootstrap-icons';

// BOOTSTRAP IMPORTS
import Button from 'react-bootstrap/Button';

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
        <div className="text-align-center roboto-font margin-bottom">
          <h2>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>
          <HexagonComponent/>
        </div>

        {/* TEXT WITH BORDER */}
        <div className="green-border margin-bottom text-align-center padding-text">
          <h2 className="poppins-font bold-font line-height">
            Skåne will become Sweden&apos;s leading Tech region and build companies active <span className="green-text">all over the world.</span>
          </h2>
        </div>

        {/* COMPONENT CAROUSEL */}
        <CarouselAboutComponent />

        {/* DID WE CAUGHT YOUR INTEREST */}
        <div className="wrapper-interest grid-two margin-bottom">
          <div className="interest-div">
            <h2 className="roboto-font">Did we catch your interest?</h2>

            <div id="contact-section">
              <p>Welcome to Loop Capital!</p>
              <div id="arrow-svg">
                <svg width="52" height="41" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M38 3L39 6C39 6 40.1358 8.96653 39.5061 10.9239C38.3952 14.3778 36.5982 16.152 33.4906 17.8814C30.3254 19.6429 27.4288 19.5762 24.3696 19.2125C22.2602 18.9618 18.8442 18.2282 18.1511 15.6826C17.8227 14.4762 18.3598 13.4174 19.4642 12.8926C20.4635 12.4178 21.4606 12.3354 22.5278 12.8926C23.6687 13.4883 24.0442 14.7027 24.3696 15.6826C24.695 16.6626 25.0429 18.2282 25.0429 18.2282C25.0429 18.2282 25.7487 20.098 25.412 21.226C24.8732 23.0313 23.8096 24.044 22.0903 24.7003C19.1635 25.8174 15.8852 24.4315 13.4244 23.877C12.0483 23.5669 8.95972 22.4459 8.95972 22.4459L5.45823 21.5441C5.45823 21.5441 1.92307 21.2221 2.16322 20.9198C2.70603 20.2363 6.15567 18.0841 6.77104 17.5655C7.27086 17.1442 8.0841 16.2926 8.0841 16.2926L8.84471 15.584C8.84471 15.584 9.51433 15.2083 9.39716 15.2318C8.84471 15.3424 7.62445 16.8993 6.33335 17.937C4.91935 19.0736 3.78977 19.9378 2.45751 20.7002C0.948892 21.5636 3.60903 23.4213 4.14492 24.2494C5.02218 25.605 5.79393 26.3678 6.56196 27.7919C6.77239 28.1821 7.53921 29 7.53921 29" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>
          <div className="button-contact">
            <Link href="/contact">
              <Button>Make Contact</Button>
            </Link>
          </div>

        </div>

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