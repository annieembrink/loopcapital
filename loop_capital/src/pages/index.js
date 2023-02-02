import CarouselAboutComponent from "@/components/CarouselAboutComponent"
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent"
import Link from "next/link"

export default function Home(props) {
  console.log('props', props)
  return (
    <>
    <DefaultLayoutComponent>
    <div className="hero-section">
      <h1>Welcome to one of Skåne&apos;s most active early-stage <span className="animated-text">Investors</span></h1>
      <p>Lorem ipsum dolor sit</p>
      <Link href="/contact">
        <button>Lorem ipsum</button>
      </Link>
    </div>

    <div id="align-row" className="section-2">
      <div className="green-border margin-bottom">
        <h2 className="underline-animation">We can offer you</h2>
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
        <p id="quote-tag">"</p>
          <p id="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* Right align text */}
          <p className="right-align">Name Namesson</p>
          <p className="right-align sm-text">Position</p>
      </div>

    </div>

    {/* MOVE THIS TO COMPONENT? */}
      {props.wpDataJson.map(num => 
      <div key={num} className="green-border green-border-numbers margin-bottom">
        <div>
          <p className="extra-big-font">{num.acf.investors}</p>
          <p className="p-tag-numbers">investors</p>
        </div>
        <div>
          <p className="extra-big-font">{num.acf.number_of_investments}</p>
          <p className="p-tag-numbers">numbers of investments</p>
        </div>
        <div>
          <p className="extra-big-font">{num.acf.msek_investments}</p>
          <p className="p-tag-numbers">(MSEK) investments</p>
        </div>
      </div>)}

      <div>
        <h2>How could a <span>journey</span> with Loop Capital look like?</h2>
        <div className="green-border margin-bottom">here comes the journey-map</div>
      </div>


      <div className="green-border margin-bottom">
        {/* SPAN NEED CLASS FOR GREEN TEXT */}
        <h2>
          Skåne will become Sweden&apos;s leading Tech region and build companies active <span className="green-text">all over the world</span>
        </h2>
      </div>
      
      <CarouselAboutComponent/>
      
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




