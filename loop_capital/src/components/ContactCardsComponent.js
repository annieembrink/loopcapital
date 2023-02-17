import Button from 'react-bootstrap/Button';

const ContactCardsComponent = ({buttonOnClick, showDivOnClick, activeLink, showDiv}) => {
    return ( 
        <div className='wrapper-contact'>
        <div className="wrapper-filter-contact">
            <div className="filter-contact-mobile">
                <p className={activeLink === 'Entrepreneur' ? "active" : ""} onClick={(e) => showDivOnClick(e)}>Entrepreneur</p>
                <p className={activeLink === 'Investor' ? "active" : ""} onClick={(e) => showDivOnClick(e)}>Investor</p>
            </div>
        </div>
        <div className="wrapper-form-hello">
            <div className={`hello-contact roboto-font grid-row-box ${!showDiv ? 'hidden-on-mobile' : null}`}>
                <div className='align-h2'><h2 className='font-bold'>Hello <span className='green-text'>Entrepreneur!</span></h2></div>
                <p>Are you an entrepreneur who is at the start of your big journey and need help to reach your full potential?</p>
                <div><Button onClick={() => buttonOnClick('Entrepreneur')}>Let&apos;s get in touch!</Button></div>
            </div>

            <div className={`hello-contact poppins-font grid-row-box ${showDiv ? 'hidden-on-mobile' : null}`}>
                <div><h2>Hello <span className='green-text'>Investor!</span></h2></div>
                <p>Are you an investor that wants to be apart of the journey to make Skåne the leading Tech region?</p>
                <div>
                    
                    <Button onClick={() => buttonOnClick('Investor')}>Contact us!</Button>
                </div>
            </div>
        </div>

    </div>
     );
}
 
export default ContactCardsComponent;