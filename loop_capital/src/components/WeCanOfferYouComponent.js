// IMPORTS BOOTSTRAP
import * as Icon from 'react-bootstrap-icons';

const WeCanOfferYouComponent = (props) => {
    return (    
    <div className="wrapper-offer-you green-border">
      <h2 className="underline-animation roboto-font">{props.props[0].title.rendered}</h2>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="400"><Icon.ArrowRight className="green-text bootstrap-icon" />{props.props[0].acf.row_1}</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="600"><Icon.ArrowRight className="green-text bootstrap-icon" />{props.props[0].acf.row_2}</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="800"><Icon.ArrowRight className="green-text bootstrap-icon" />{props.props[0].acf.row_3}</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="1000"><Icon.ArrowRight className="green-text bootstrap-icon" />{props.props[0].acf.row_4}</p>
    </div> );
}
 
export default WeCanOfferYouComponent;