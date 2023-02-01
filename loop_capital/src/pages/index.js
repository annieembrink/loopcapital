import CarouselAboutComponent from "@/components/CarouselAboutComponent"
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent"

export default function Home(props) {
  console.log('props', props)
  return (
    <>
    <DefaultLayoutComponent>
    <h1>Welcome to one of Skåne&apos;s most active early-stage Investors</h1>

    <div>
      <h2>We can offer you</h2>
      <ul className="arrowList">
          <li>
            <div className="arrow">-</div>
            <div className="arrowListItems">A creative enviroment</div>
          </li>
          <li>
            <div className="arrow">-</div>
            <div className="arrowListItems">Possibility to ask for advice</div>
          </li>
          <li>
            <div className="arrow">-</div>
            <div className="arrowListItems">Wide contact network</div>
          </li>
          <li>
            <div className="arrow">-</div>
            <div className="arrowListItems">Access to capital</div>
          </li>
      </ul>
    </div>

    <div>
      {/* Add quote icon */}
      <div>"QUOTE"</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* Right align text */}
        <p>Name Namesson</p>
        <p>Position</p>
    </div>

    {/* MOVE THIS TO COMPONENT? */}
      {props.wpDataJson.map(num => 
      <div key={num}>
        <div>
          <p>{num.acf.investors}</p>
          <p>investors</p>
        </div>
        <div>
          <p>{num.acf.number_of_investments}</p>
          <p>numbers of investments</p>
        </div>
        <div>
          <p>{num.acf.msek_investments}</p>
          <p>(MSEK) investments</p>
        </div>
      </div>)}

      
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




