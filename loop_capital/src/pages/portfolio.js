import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import PopupComponent from "@/components/PopupComponent";
import {useState} from 'react'

export default function Portfolio(props) {
  console.log('PORTFOLIO props', props);

  const [chosenCompanies, setChosenCompanies] = useState(props.wpDataJson)
  const [showPopup, setShowPopup] = useState(false)
  const [popupCompany, setPopupCompany] = useState({})

  const filter = (e) => {
    e.preventDefault()
    const filteredData = props.wpDataJson.filter(company => company.acf.branch === e.target.innerText)
    console.log('filteredData', filteredData)
    setChosenCompanies(filteredData)
  }

  const showAll = (e) => {
    setChosenCompanies(props.wpDataJson)
  }

  const companyPopup = (e, company) => {
    console.log('testing popup', company)
    setShowPopup(true)
    setPopupCompany(company)
  }

  return (
    <>
    <div style={{opacity: showPopup ? '70%' : null, zIndex: showPopup ? '-1' : null}}>
    {/* <div style={{backgroundColor: showPopup ? 'rgba(255, 0, 0, 0.2)' : null}}> */}
    <DefaultLayoutComponent>
    <h1>PORTFOLIO</h1>
    
    {showPopup ? 
    <PopupComponent setShowPopup={setShowPopup} popupCompany={popupCompany}/>  
    : null}

    <div>
      <ul>
        <li onClick={(e) => showAll(e)}>All investments</li>
        <li onClick={(e) => filter(e)}>AI</li>
        <li onClick={(e) => filter(e)}>Fintech</li>
        <li onClick={(e) => filter(e)}>Other</li>
      </ul>
    </div>

      {chosenCompanies.map(company => 
      <div key={company}>
        <h3>{company.acf.company_name}</h3>
        <div onClick={(e) => companyPopup(e, company)} style={{
            backgroundImage: `url(${company.acf.image_of_the_company})`,
            width: '200px',
            height: '200px',
            }}></div>
        <h7>{company.acf.branch}</h7>
        <p>{company.acf.about}</p>
      </div>)}
      
      </DefaultLayoutComponent>
      </div>
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