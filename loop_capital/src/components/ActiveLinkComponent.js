const ActiveLinkComponent = (props) => {

    const chooseLink = (e) => {
        props.setChosenLink(e.target.textContent)
        if (e.target.textContent === 'About') {
          props.setContent(props.popupCompany.acf.about)
        } else {
          props.setContent(props.popupCompany.acf.testimonial)
        }
    }

    return ( 
        <p className={`nav-link`} style={{ textDecoration: props.chosenLink === props.text ? 'underline' : 'none'}} onClick={(e) => chooseLink(e)}>{props.text}</p>
     );
}
 
export default ActiveLinkComponent;