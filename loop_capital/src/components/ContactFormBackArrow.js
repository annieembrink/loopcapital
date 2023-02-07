import * as Icon from 'react-bootstrap-icons';

const ContactFormBackArrow = ({nr, setCurrentInput, setValidationError}) => {

    const onBackClick = (nr) => {
        setCurrentInput(nr);
        setValidationError('');
    };

    return ( 
        <p onClick={() => onBackClick(nr)}><Icon.ArrowReturnLeft className="green-text bootstrap-icon" onClick={() => onBackClick(nr)}/>Back</p>
     );
}
 
export default ContactFormBackArrow;