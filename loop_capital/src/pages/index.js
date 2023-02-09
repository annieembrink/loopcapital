// COMPONENT IMPORTS
import CarouselAboutComponent from "@/components/CarouselAboutComponent";
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import SwingCounterComponent from "@/components/SwingCounterComponent";
import FixedContactComponent from "@/components//FixedContactComponent";

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
        {/* HERO-SECTION */}
        <div className="hero-section" >
          <h1 data-aos="fade-right" data-aos-duration="500">Welcome to one of Skåne&apos;s most active early-stage <span className="animated-text underline-animation">
            <span data-aos="fade-right" data-aos-duration="800">I</span>
            <span data-aos="fade-right" data-aos-duration="1100">n</span>
            <span data-aos="fade-right" data-aos-duration="1400">v</span>
            <span data-aos="fade-right" data-aos-duration="1700">e</span>
            <span data-aos="fade-right" data-aos-duration="2000">s</span>
            <span data-aos="fade-right" data-aos-duration="2300">t</span>
            <span data-aos="fade-right" data-aos-duration="2600">o</span>
            <span data-aos="fade-right" data-aos-duration="2900">r</span>
            <span data-aos="fade-right" data-aos-duration="3000">.</span>
          </span>
          </h1>
          <p className="light-font" data-aos="fade-right" data-aos-duration="600">Get access to 48 investors with a lot of experience and network.</p>
          <Link href="/contact">
            <Button data-aos="fade-right" data-aos-duration="700">Make Contact</Button>
          </Link>
        </div>

        {/* WE CAN OFFER YOU */}

        <div className="align-item-center two-containers">
          <div className="wrapper-offer-you green-border">
            <h2 className="underline-animation roboto-font">We can offer you</h2>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="400"><Icon.ArrowRight className="green-text bootstrap-icon" />A creative enviroment</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="600"><Icon.ArrowRight className="green-text bootstrap-icon" />Possibility to ask for advice</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="800"><Icon.ArrowRight className="green-text bootstrap-icon" />Wide contact network</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="1000"><Icon.ArrowRight className="green-text bootstrap-icon" />Access to capital</p>
          </div>

          {/* QUOTE */}

          <div className="wrapper-quote margin-bottom">
            <Icon.Quote className="green-text" id="quote-tag" />
            <p className="quote">
              We are looking for early stage startups in the Skåne region with a lot of passion and with a scaleable tech idea. The total investment round are usually between 2-6 mSEK a pre-seed round. The first steps have been taken, the idea have been verified and a founding team are in place</p>
            <p>Together we build a global game changer! And that are exactly how we work. We are doing this together in the same boat. You run and we support!</p>
            {/* Right align text */}
            <p className="right-align">David Nilsson-Sträng <br /><span id="title">Co-founder</span></p>
          </div>

        </div>

          {/* COMPONENT TO NUMBERS ON COUNT */}

          <SwingCounterComponent props={props} />

          {/* JOURNEY MAP */}
          <div className="text-align-center">

          <div >
            <h2>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>
            <div className="margin-bottom">
              <h1 data-aos="fade-right" data-aos-duration="400">1</h1>
              <h1 data-aos="fade-right" data-aos-duration="700">2</h1>
              <h1 data-aos="fade-right" data-aos-duration="1000">3</h1>
              <h1 data-aos="fade-right" data-aos-duration="1300">4</h1>
            </div>

          </div>

          <div className="green-border margin-bottom">
            {/* SPAN NEED CLASS FOR GREEN TEXT */}
            <h2>
              Skåne will become Sweden&apos;s leading Tech region and build companies active <span className="green-text">all over the world</span>
            </h2>
          </div>

        </div>

        {/* COMPONENT CAROUSEL */}
        <CarouselAboutComponent />

        <div id="contact-section">
          <h2>Did we catch your interest?</h2>
          <h6>Welcome to Loop Capital!</h6>

          <Link href="/contact">
            <Button>Make Contact</Button>
          </Link>
          <div id="arrow-svg">
            <svg width="52" height="41" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 3L39 6C39 6 40.1358 8.96653 39.5061 10.9239C38.3952 14.3778 36.5982 16.152 33.4906 17.8814C30.3254 19.6429 27.4288 19.5762 24.3696 19.2125C22.2602 18.9618 18.8442 18.2282 18.1511 15.6826C17.8227 14.4762 18.3598 13.4174 19.4642 12.8926C20.4635 12.4178 21.4606 12.3354 22.5278 12.8926C23.6687 13.4883 24.0442 14.7027 24.3696 15.6826C24.695 16.6626 25.0429 18.2282 25.0429 18.2282C25.0429 18.2282 25.7487 20.098 25.412 21.226C24.8732 23.0313 23.8096 24.044 22.0903 24.7003C19.1635 25.8174 15.8852 24.4315 13.4244 23.877C12.0483 23.5669 8.95972 22.4459 8.95972 22.4459L5.45823 21.5441C5.45823 21.5441 1.92307 21.2221 2.16322 20.9198C2.70603 20.2363 6.15567 18.0841 6.77104 17.5655C7.27086 17.1442 8.0841 16.2926 8.0841 16.2926L8.84471 15.584C8.84471 15.584 9.51433 15.2083 9.39716 15.2318C8.84471 15.3424 7.62445 16.8993 6.33335 17.937C4.91935 19.0736 3.78977 19.9378 2.45751 20.7002C0.948892 21.5636 3.60903 23.4213 4.14492 24.2494C5.02218 25.605 5.79393 26.3678 6.56196 27.7919C6.77239 28.1821 7.53921 29 7.53921 29" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" />
            </svg>
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