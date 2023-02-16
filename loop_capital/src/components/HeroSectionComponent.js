import Link from "next/link";
import { Paragraph } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';

const HeroSectionComponent = ({props}) => {
  
    return ( 
                <div className="hero-section" >
                <h1 data-aos="fade-right" data-aos-duration="500">{props.headline} <span className="animated-text underline-animation">
                  {props.headline_greenword}
                  {/* <span data-aos="fade-right" data-aos-duration="800">I</span>
                  <span data-aos="fade-right" data-aos-duration="1100">n</span>
                  <span data-aos="fade-right" data-aos-duration="1400">v</span>
                  <span data-aos="fade-right" data-aos-duration="1700">e</span>
                  <span data-aos="fade-right" data-aos-duration="2000">s</span>
                  <span data-aos="fade-right" data-aos-duration="2300">t</span>
                  <span data-aos="fade-right" data-aos-duration="2600">o</span>
                  <span data-aos="fade-right" data-aos-duration="2900">r</span>
                  <span data-aos="fade-right" data-aos-duration="3000">.</span> */}
                </span>
                </h1>
                <p className="light-font" data-aos="fade-right" data-aos-duration="600">{props.paragraph}</p> 
                <Link href="/contact">
                  <Button data-aos="fade-right" data-aos-duration="700">Make Contact</Button>
                </Link>
              </div>
     );
}
 
export default HeroSectionComponent;