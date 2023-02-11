import * as Icon from 'react-bootstrap-icons';

const ContactFormBackArrow = ({ nr, setCurrentInput, setValidationError }) => {

    const onBackClick = (nr) => {
        setCurrentInput(nr);
        setValidationError('');
    };

    return ( 
        <p className='back-btn' onClick={() => onBackClick(nr)}><Icon.ArrowReturnLeft className=" bootstrap-icon" onClick={() => onBackClick(nr)}/> Back</p>
     );
}

export default ContactFormBackArrow;