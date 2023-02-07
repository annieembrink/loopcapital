const ContactFormNextButton = ({string, nr, validateMap, validateEmail, validateText}) => {

    const onNextClick = (input, nr) => {
        const validateFunc = input === 'email' ? validateEmail : validateText;
        validateFunc(validateMap[input], nr);
    };

    return ( 

        <button type='button' onClick={() => onNextClick(string, nr)}>NEXT</button>

     );
}
 
export default ContactFormNextButton;