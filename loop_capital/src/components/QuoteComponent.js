import * as Icon from 'react-bootstrap-icons';

const QuoteComponent = () => {
    return (        
    <div className="wrapper-quote margin-bottom">
    <Icon.Quote className="green-text" id="quote-tag" />
    <p className="quote">
      We are looking for early stage startups in the Skåne region with a lot of passion and with a scaleable tech idea. The total investment round are usually between 2-6 MSEK a pre-seed round. The first steps have been taken, the idea have been verified and a founding team are in place.
      <br></br>
      <br></br>
      Together we build a global game changer! And that are exactly how we work. We are doing this together in the same boat. You run and we support!</p>
    {/* Right align text */}
    <p className="right-align">David Nilsson-Sträng <br /><span id="title">Co-founder</span></p>
  </div> );
}
 
export default QuoteComponent;