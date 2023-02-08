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
      <FixedContactComponent/>
        <div className="hero-section" >
          <h1 data-aos="fade-right" data-aos-duration="600">Welcome to one of Skåne&apos;s most active early-stage <span className="animated-text">Investors</span></h1>
          <p className="light-font" data-aos="fade-right" data-aos-duration="800">Get access to 48 investors with a lot of experience and network.</p>
          <Link href="/contact">
            <Button data-aos="fade-right" data-aos-duration="1000">Make Contact</Button>
          </Link>
        </div>

        <div className="two-containers">
          <div className="wrapper-offer-you green-border">
            <h2 className="underline-animation roboto-font">We can offer you</h2>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="400"><Icon.ArrowRight className="green-text bootstrap-icon"/>A creative enviroment</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="600"><Icon.ArrowRight className="green-text bootstrap-icon"/>Possibility to ask for advice</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="800"><Icon.ArrowRight className="green-text bootstrap-icon"/>Wide contact network</p>
            <p className="bigger-p" data-aos="fade-right" data-aos-duration="1000"><Icon.ArrowRight className="green-text bootstrap-icon"/>Access to capital</p>
          </div>

          <div className="wrapper-quote margin-bottom">
          <Icon.Quote className="green-text" id="quote-tag"/>
            <p className="quote">
              We are looking for early stage startups in the Skåne region with a lot of passion and with a scaleable tech idea. The total investment round are usually between 2-6 mSEK a pre-seed round. The first steps have been taken, the idea have been verified and a founding team are in place</p>
              <p>Together we build a global game changer! And that are exactly how we work. We are doing this together in the same boat. You run and we support!</p>
            {/* Right align text */}
            <p className="right-align">David Nilsson-Sträng <br /><span id="title">Co-founder</span></p>
          </div>

        </div>

        <div>

          {/* MOVE THIS TO COMPONENT? */}
          <SwingCounterComponent props={props}/>
        
          <div >
            <h2>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>
            <div className="green-border margin-bottom">
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

        <CarouselAboutComponent />

        <div className="section-4">
          <h2>Did we catch your interest?</h2>
          <h6>Welcome to Loop Capital!</h6>
          <Link href="/contact">
            <Button>Make Contact</Button>
          </Link>
        </div>

      </DefaultLayoutComponent>

    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {
  // const allPosts = await getAllPostsForHome(preview)

  let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/startpage-numbers')
  let wpDataJson = await wpData.json()
  //console.log('wpData', wpDataJson)

  return {
    props: { wpDataJson: wpDataJson },
    // revalidate: 10,
  }
}