const ContactAnimationComponent = (props) => {
    return (  
        <div className="wrapper-hero">
            <h1 data-aos="fade-right" data-aos-duration="600">{props.props.headline}&nbsp;
                <span className="animated-text">{props.props.headline_greenword}</span>
            </h1>
            <p className='p-hero' data-aos="fade-right" data-aos-duration="800">{props.props.paragraph}</p>
        </div>
    );
}
export default ContactAnimationComponent;