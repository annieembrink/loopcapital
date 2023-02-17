import * as Icon from 'react-bootstrap-icons';

const QuoteComponent = (props) => {
    return (        
    <div className="wrapper-quote margin-bottom">
    <Icon.Quote className="green-text" id="quote-tag" />
    <p className="quote">{props.props[0].acf.the_quote}</p>
    {/* Right align text */}
    <p className="right-align">{props.props[0].acf.who_left_the_quote}<br /><span id="title">{props.props[0].acf.position_of_the_person}</span></p>
  </div> );
}
 
export default QuoteComponent;