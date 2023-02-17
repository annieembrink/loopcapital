// COMPONENT IMPORTS
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";
import PopupComponent from "@/components/PopupComponent";
import FixedContactComponent from "@/components//FixedContactComponent";

// BOOTSTRAP IMPORTS
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// REACT IMPORTS
import { useEffect, useState } from 'react';

export default function Portfolio(props) {

  // PORTFOLIO HEROSECTION
  const headline = props.wpDataJson.portfolioHeroSection.headline;
  const headlineGreenWord = props.wpDataJson.portfolioHeroSection.headline_greenword;
  const paragraph = props.wpDataJson.portfolioHeroSection.paragraph;
  
  const [chosenCompanies, setChosenCompanies] = useState(props.wpDataJson.portfolioData);
  const [chosenBranch, setChosenBranch] = useState('All investments');
  const [showPopup, setShowPopup] = useState(false);
  const [popupCompany, setPopupCompany] = useState({});

  const filter = (e) => {
    const filteredData = props.wpDataJson.portfolioData.filter(company => company.acf.branch === e.target.innerText);
    setChosenCompanies(filteredData);
  }

  useEffect(() => {
    if (chosenCompanies !== props.wpDataJson.portfolioData) {
      setChosenBranch(chosenCompanies[0].acf.branch)
    } else {
      setChosenBranch('All investments')
    }
  }, [chosenCompanies])

  const showAll = () => {
    setChosenCompanies(props.wpDataJson.portfolioData);
  }

  const companyPopup = (company) => {
    setShowPopup(true);
    setPopupCompany(company);
  }

  let set = new Set();
  props.wpDataJson.portfolioData.map(c => set.add(c.acf.branch))[0];
  let arrOfBranches = Array.from(set);

  return (
    <>
      <DefaultLayoutComponent>
      <FixedContactComponent/>

        {showPopup ?
          <PopupComponent showPopup={showPopup} setShowPopup={setShowPopup} popupCompany={popupCompany} errormsg={props.errormsg}/>
          : null} 
        <div className="hero-section">
          <h1 data-aos="fade-right" data-aos-duration="600">{headline} <span className="animated-text">
                {headlineGreenWord}
                {/* <span data-aos="fade-right" data-aos-duration="800">j</span>
                <span data-aos="fade-right" data-aos-duration="1100">o</span>
                <span data-aos="fade-right" data-aos-duration="1400">u</span>
                <span data-aos="fade-right" data-aos-duration="1700">r</span>
                <span data-aos="fade-right" data-aos-duration="2000">n</span>
                <span data-aos="fade-right" data-aos-duration="2300">e</span>
                <span data-aos="fade-right" data-aos-duration="2600">y</span> */}
              </span>
            </h1>
          <p data-aos="fade-right" data-aos-duration="800">{paragraph}</p>
        </div>

         <div className="margin-bottom">
          <div>
            <ul id="filter-list" className="roboto-font">
              <li className={chosenBranch === 'All investments' ? "active" : ""} onClick={showAll}>All investments</li>
              {arrOfBranches.map(branch => <li className={chosenBranch === branch ? "active" : ""} onClick={(e) => filter(e)} key={branch}>{branch}</li>)}
            </ul>
          </div> 

           <Row xs={2} md={3} lg={4} className="g-4">
            {chosenCompanies.map(company =>
              <Col key={company.title.rendered}>
                <Card className="no-background" onClick={() => companyPopup(company)}>
                  <Card.Img variant="top" src={company.acf.image_of_the_company_logo} />
                  <Card.Body className="card-body">
                    <Card.Title className="h3">{company.title.rendered}</Card.Title>
                    <Card.Text className="green-text roboto-font">{company.acf.branch}</Card.Text>
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

export async function getStaticProps({ preview = false }) {
  try {
    function fetchPortfolio() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/portfolio?per_page=100')
      .then(res => res.json())
    }
    function fetchHeroSection() {
      return fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/wp/v2/hero-section')
      .then (res => res.json())
    }
    const [portfolio, heroSectionData] = await Promise.allSettled([fetchPortfolio(), fetchHeroSection()]);
    // Get only portfolio hero-section
    const filterHeroSection = heroSectionData.value.filter(index => index.slug === "portfolio-hero-section");
    // Get only necesary info for hero-section
    const portfolioHeroSection = filterHeroSection[0].acf;
    // Get only the portfolio value
    const portfolioData = portfolio.value;
    // console.log("wpdata", portfolioData, portfolioHeroSection)
    return {
      props: { wpDataJson: {portfolioData, portfolioHeroSection}, errormsg: "Nothing to read right now, try again later!" }
    }
  } catch (error) {
    console.error(error);
    return {
      props: {errormsg: "Nothing to read right now, try again later!"}
    }
  }
}