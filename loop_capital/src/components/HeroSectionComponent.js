// IMPORT NEXT/REACT
import Link from "next/link";
//IMPORTS BOOTSTRAP
import { Paragraph } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';

const HeroSectionComponent = ({ props }) => {
  return (
    <div className="hero-section" >
      <h1 data-aos="fade-right" data-aos-duration="500">{props.headline} <span className="animated-text underline-animation">
        {props.headline_greenword}</span>
      </h1>
      <p className="light-font" data-aos="fade-right" data-aos-duration="600">{props.paragraph}</p>
      <Link href="/contact">
        <Button data-aos="fade-right" data-aos-duration="700">Make Contact</Button>
      </Link>
    </div>
  );
}
export default HeroSectionComponent;