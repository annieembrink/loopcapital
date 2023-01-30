import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

export default function Portfolio(props) {
  console.log('PORTFOLIO props', props);
  return (
    <>
    <DefaultLayoutComponent>
    <h1>PORTFOLIO</h1>
      {props.wpDataJson.map(company => 
      <div>
        <h3>{company.acf.company_name}</h3>
        <div style={{
            backgroundImage: `url(${company.acf.image_of_the_company})`,
            width: '200px',
            height: '200px',
            }}></div>
        <h7>{company.acf.branch}</h7>
        <p>{company.acf.about}</p>
      </div>)}
      
      </DefaultLayoutComponent>

    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {
  // const allPosts = await getAllPostsForHome(preview)

  let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/portfolio')
  let wpDataJson = await wpData.json()
  console.log('wpData', wpDataJson)

  return {
    props: { wpDataJson: wpDataJson },
    // revalidate: 10,
  }
}