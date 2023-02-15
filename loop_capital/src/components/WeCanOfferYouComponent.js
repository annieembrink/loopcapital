import * as Icon from 'react-bootstrap-icons';

const WeCanOfferYouComponent = () => {
    return (    
    <div className="wrapper-offer-you green-border">
      <h2 className="underline-animation roboto-font">We can offer you</h2>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="400"><Icon.ArrowRight className="green-text bootstrap-icon" />A creative enviroment</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="600"><Icon.ArrowRight className="green-text bootstrap-icon" />Possibility to ask for advice</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="800"><Icon.ArrowRight className="green-text bootstrap-icon" />Wide contact network</p>
      <p className="bigger-p" data-aos="fade-right" data-aos-duration="1000"><Icon.ArrowRight className="green-text bootstrap-icon" />Access to capital</p>
    </div> );
}
 
export default WeCanOfferYouComponent;