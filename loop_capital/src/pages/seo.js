export default function Seo(props) {
    console.log('schema', props.wpDataJson)

    fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/yoast/v1/get_head?url=https://172-104-145-53.ip.linodeusercontent.com/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    })
    .then(res => res.json())
    .then(data => {
        console.log('description', data.json.description)
        console.log('title', data.json.title)
        console.log('all', data.json)
        console.log('html', data.html)
    })

    return(
        <></>
    )
}

export async function getStaticProps({ preview = false }) {

    // let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/#/schema/logo/image/');
    let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/yoast/v1/get_head?url=https://172-104-145-53.ip.linodeusercontent.com/#/schema/Organization/1');
    // let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/yoast/v1/get_head?url=https://172-104-145-53.ip.linodeusercontent.com/');
    // let wpDataJson = await wpData.json()
    // console.log(wpDataJson)
  
    return {
      props: { wpDataJson: wpDataJson }
    }
  }