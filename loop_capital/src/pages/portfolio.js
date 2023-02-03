// import CompanyCardComponent from "@/components/CompanyCardComponent";
// COMPONENTS
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import PopupComponent from "@/components/PopupComponent";
// BOOTSTRAP
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useState } from 'react'

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

  let set = new Set();
  let uniqueBranchesSet = props.wpDataJson.map(c => set.add(c.acf.branch))[0];
  let arrOfBranches = Array.from(set);

  return (
    <>
      <DefaultLayoutComponent>

        {showPopup ?
          <PopupComponent showPopup={showPopup} setShowPopup={setShowPopup} popupCompany={popupCompany} />
          : null}
        <div className="hero-section">
          <h1>Loop Capital invest at an early stage in the companies <span className="green-text">journey</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    

    <div>
      <ul>
        <li onClick={(e) => showAll(e)}>All investments</li>
        {arrOfBranches.map(branch => <li onClick={(e) => filter(e)} key={branch}>{branch}</li>)}
      </ul>
    </div>
        <div className="section-2">
          <div>
            <ul id="filter-list" className="roboto-font">
              <li onClick={(e) => showAll(e)}>All investments</li>
              {arrOfBranches.map(branch => <li onClick={(e) => filter(e)} key={branch}>{branch}</li>)}
            </ul>
          </div>

          {/* PUT THE CARDS IN THE COMPONENT, PASS PROPS? */}
          {/* <CompanyCardComponent /> */}

          <Row xs={2} md={3} lg={4} className="g-4">
            {chosenCompanies.map(company =>
              <Col>
                <Card className="no-background" onClick={(e) => companyPopup(e, company)}>
                  <Card.Img variant="top" src={company.acf.image_of_the_company} />
                  <Card.Body className="card-body">
                    <Card.Title className="h3">{company.title.rendered}</Card.Title>
                    <Card.Text className="green-text h4 roboto-font">{company.acf.branch}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>

        </div>
        
      </DefaultLayoutComponent>
    </>
  )
}

// pages/index.js
export async function getStaticProps({ preview = false }) {

  let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/portfolio')
  let wpDataJson = await wpData.json()
  console.log('wpData', wpDataJson)

  return {
    props: { wpDataJson: wpDataJson },
  }
}