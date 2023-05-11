import { Button } from "react-bootstrap";

const ContactFormNextButton = ({ string, nr, validateMap, validateEmail, validateText }) => {

    const onNextClick = (input, nr) => {
        const validateFunc = input === 'email' ? validateEmail : validateText;
        validateFunc(validateMap[input], nr);
    };

    return (
        <Button className="btn-secondary" type='button' onClick={() => onNextClick(string, nr)}>NEXT</Button>
    );
}

export default ContactFormNextButton;