import DefaultLayoutComponent from "@/components/DefaultLayoutComponent"

export default function Home(props) {
  console.log('props', props)
  return (
    <>
    <DefaultLayoutComponent>
    <h1>This is the start page</h1>
      {props.wpDataJson.map(post => 
      <div>
        <p>{post.date}</p>
        <p>{post.slug}</p>
        <p>{post.content.rendered}</p>
      </div>)}
      </DefaultLayoutComponent>
    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {
  // const allPosts = await getAllPostsForHome(preview)

  let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/posts')
  let wpDataJson = await wpData.json()
  console.log('wpData', wpDataJson)

  return {
    props: { wpDataJson: wpDataJson },
    // revalidate: 10,
  }
}




