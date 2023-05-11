import Button from 'react-bootstrap/Button';

const ContactCardsComponent = ({ buttonOnClick, showDivOnClick, activeLink, showDiv, props }) => {
    return (
        <div className='wrapper-contact'>
            <div className="wrapper-filter-contact">
                <div className="filter-contact-mobile">
                    <p className={activeLink === 'Entrepreneur' ? "active" : ""} onClick={(e) => showDivOnClick(e)}>{props.headline_entrepreneur}</p>
                    <p className={activeLink === 'Investor' ? "active" : ""} onClick={(e) => showDivOnClick(e)}>{props.headline_investor}</p>
                </div>
            </div>
            <div className="wrapper-form-hello">
                <div className={`hello-contact roboto-font grid-row-box ${!showDiv ? 'hidden-on-mobile' : null}`}>
                    <div className='align-h2'><h2 className='font-bold'>{props.headline_hello} <span className='green-text'>{props.headline_entrepreneur}</span></h2></div>
                    <p>{props.paragraph_entrepreneur}</p>
                    <div><Button onClick={() => buttonOnClick('Entrepreneur')}>Let&apos;s get in touch!</Button></div>
                </div>

                <div className={`hello-contact poppins-font grid-row-box ${showDiv ? 'hidden-on-mobile' : null}`}>
                    <div><h2>{props.headline_hello} <span className='green-text'>{props.headline_investor}</span></h2></div>
                    <p>{props.paragraph_investor}</p>
                    <div><Button onClick={() => buttonOnClick('Investor')}>Contact us!</Button></div>
                </div>
            </div>
        </div>
    );
}
export default ContactCardsComponent;