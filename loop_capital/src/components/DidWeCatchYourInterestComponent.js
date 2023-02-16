import Link from "next/link";
import Button from 'react-bootstrap/Button';
import SvgArrowComponent from "./SvgArrowComponent";

const DidWeCatchYourInterestComponent = () => {
    return ( 
        <div className="wrapper-interest grid-two margin-bottom">
        <div className="interest-div">
          <h2 className="roboto-font">Did we catch your interest?</h2>

          <div id="contact-section">
            <p>Welcome to Loop Capital!</p>
            <SvgArrowComponent/>
          </div>

        </div>
        <div className="button-contact">
          <Link href="/contact">
            <Button>Make Contact</Button>
          </Link>
        </div>

      </div>
     );
}
 
export default DidWeCatchYourInterestComponent;