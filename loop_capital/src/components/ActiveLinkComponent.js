const ActiveLinkComponent = (props) => {

    const chooseLink = (e) => {
        props.setChosenLink(e.target.textContent);
        if (e.target.textContent === 'About') {
          props.setContent(props.popupCompany.acf.about);
        } else {
          if(!props.popupCompany.acf.testimonial) {
            console.log('testing this now', props.errormsg)
            return props.setContent(props.errormsg)
          }
          props.setContent(props.popupCompany.acf.testimonial);
        }
    }
    return ( 
        <p className={`nav-link ${props.chosenLink === props.text ? "active" : ""}`} onClick={(e) => chooseLink(e)}>{props.text}</p>
     );
}
export default ActiveLinkComponent;