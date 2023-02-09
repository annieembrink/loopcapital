// COMPONENT IMPORTS
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import PopupComponent from "@/components/PopupComponent";
import FixedContactComponent from "@/components//FixedContactComponent";

// BOOTSTRAP IMPORTS
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// REACT IMPORTS
import { useState } from 'react';

export default function Portfolio(props) {
  const [chosenCompanies, setChosenCompanies] = useState(props.wpDataJson);
  const [showPopup, setShowPopup] = useState(false);
  const [popupCompany, setPopupCompany] = useState({});

  const filter = (e) => {
    const filteredData = props.wpDataJson.filter(company => company.acf.branch === e.target.innerText);
    setChosenCompanies(filteredData);
  }

  const showAll = () => {
    setChosenCompanies(props.wpDataJson);
  }

  const companyPopup = (company) => {
    setShowPopup(true);
    setPopupCompany(company);
  }

  let set = new Set();
  props.wpDataJson.map(c => set.add(c.acf.branch))[0];
  let arrOfBranches = Array.from(set);

  return (
    <>
      <DefaultLayoutComponent>
      <FixedContactComponent/>

        {showPopup ?
          <PopupComponent showPopup={showPopup} setShowPopup={setShowPopup} popupCompany={popupCompany} />
          : null}
        <div className="hero-section">
          <h1 data-aos="fade-right" data-aos-duration="600">Loop Capital invest at an early stage in the companies <span className="animated-text">
                <span data-aos="fade-right" data-aos-duration="800">j</span>
                <span data-aos="fade-right" data-aos-duration="1100">o</span>
                <span data-aos="fade-right" data-aos-duration="1400">u</span>
                <span data-aos="fade-right" data-aos-duration="1700">r</span>
                <span data-aos="fade-right" data-aos-duration="2000">n</span>
                <span data-aos="fade-right" data-aos-duration="2300">e</span>
                <span data-aos="fade-right" data-aos-duration="2600">y</span>
              </span>
            </h1>
          <p data-aos="fade-right" data-aos-duration="800">Your startup are scaleable within Tech and a big love for data driven innovation.
            <br /> Still early in the journey - but high ambitions!</p>
        </div>

        <div>
          <div>
            <ul id="filter-list" className="roboto-font">
              <li onClick={showAll}>All investments</li>
              {arrOfBranches.map(branch => <li onClick={(e) => filter(e)} key={branch}>{branch}</li>)}
            </ul>
          </div>

          {/* PUT THE CARDS IN THE COMPONENT, PASS PROPS? */}
          {/* <CompanyCardComponent /> */}

          <Row xs={2} md={3} lg={4} className="g-4">
            {chosenCompanies.map(company =>
              <Col key={company.title.rendered}>
                <Card className="no-background" onClick={() => companyPopup(company)}>
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

  try {
    let wpData = await fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/portfolio');
    let wpDataJson = await wpData.json();
  
    return {
      props: { wpDataJson: wpDataJson }
    }
  } catch (error) {
    console.error(error);
    return {
      props: {}
    }
  }
}