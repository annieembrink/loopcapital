import CarouselAboutComponent from "@/components/CarouselAboutComponent"
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent"
import Link from "next/link"
import { Icon } from '@iconify/react';


export default function Home(props) {
  console.log('props', props)
  return (
    <>
      <DefaultLayoutComponent>

        <div className="hero-section">
          <h1>Welcome to one of Skåne&apos;s most active early-stage <span className="animated-text">Investors</span></h1>
          <h5>Get access to 48 investors with a lot of experience and network.</h5>
          <Link href="/contact">
            <button>Make Contact</button>
          </Link>
        </div>

        <div id="align-row" className="section-2">
          <div className="green-border margin-bottom">
            <h3 className="underline-animation roboto-font">We can offer you</h3>
            <ul className="arrow-list">
              <li>
                <div className="arrow">-</div>
                <div className="arrow-list-items">A creative enviroment</div>
              </li>
              <li>
                <div className="arrow">-</div>
                <div className="arrow-list-items">Possibility to ask for advice</div>
              </li>
              <li>
                <div className="arrow">-</div>
                <div className="arrow-list-items">Wide contact network</div>
              </li>
              <li>
                <div className="arrow">-</div>
                <div className="arrow-list-items">Access to capital</div>
              </li>
            </ul>
          </div>

          <div className="margin-bottom">
            <p id="quote-tag">&quot;</p>
            <p id="quote">
              We are looking for early stage startups in the Skåne region with a lot of passion and with a scaleable tech idea. The total investment round are usually between 2-6 mSEK a pre-seed round. The first steps have been taken, the idea have been verified and a founding team are in place
              Together we build a global game changer! And that are exactly how we work. We are doing this together in the same boat. You run and we support!
            </p>
            {/* Right align text */}
            <p className="right-align">David Nilsson-Sträng</p>
            <p className="right-align sm-text">Position</p>
          </div>

        </div>

        <div className="section-3">

          {/* MOVE THIS TO COMPONENT? */}
          {props.wpDataJson.map(num =>
            <div key={num} className="green-border green-border-numbers margin-bottom">
              <div>
                <p className="extra-big-font">{num.acf.investors} <Icon icon="carbon:portfolio" className="icon" /></p>
                <p className="p-tag-numbers">investors</p>
              </div>
              <div>
                <p className="extra-big-font">{num.acf.number_of_investments} <Icon icon="bi:people-fill" className="icon"/></p>
                <p className="p-tag-numbers">numbers of investments</p>
              </div>
              <div>
                <p className="extra-big-font">{num.acf.msek_investments} <Icon icon="wpf:coins" className="icon"/></p>
                <p className="p-tag-numbers">(MSEK) investments</p>
              </div>
            </div>)}

          <div >
            <h2>How could a <span className="green-text">journey</span> with Loop Capital look like?</h2>
            <div className="green-border margin-bottom">here comes the journey-map</div>
          </div>

        </div>

        <div className="green-border margin-bottom">
          {/* SPAN NEED CLASS FOR GREEN TEXT */}
          <h2>
            Skåne will become Sweden&apos;s leading Tech region and build companies active <span className="green-text">all over the world</span>
          </h2>
        </div>

        <CarouselAboutComponent />

        <div className="section-4">
          <h2>Did we caught your interest?</h2>
          <h6>Welcome to Loop Capital!</h6>
          <Link href="/contact">
            <button>Make Contact</button>
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




