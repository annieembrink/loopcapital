import CarouselAboutComponent from "@/components/CarouselAboutComponent"
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent"

export default function Home(props) {
  console.log('props', props)
  return (
    <>
    <DefaultLayoutComponent>
    <h1>Welcome to one of Skåne&apos;s most active early-stage <span className="animated-text">Investors</span></h1>
      
      {props.wpDataJson.map(num => 
      <div key={num} className="green-border-numbers">
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




