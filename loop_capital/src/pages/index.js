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




