import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ContactFormBackArrow from './ContactFormBackArrow';
import ContactFormNextButton from './ContactFormNextButton';

const InvestorFormComponent = (props) => {

    let string;
    let nr;

    const childProps = {
        validateMap: props.validateMap,
        validateEmail: props.validateEmail,
        validateText: props.validateText,
        string,
        nr
    }

    const onNextKeyDown = (e, input, nr) => {
        if (e.key === 'Enter') {
            const validateFunc = input === 'email' ? props.validateEmail : props.validateText;
            validateFunc(props.validateMap[input], nr);
        }
    };

    return (
        <Form className='flexColumn formComponent poppins-font' onSubmit={(e) => props.postForm(e, 'investor')}>

            <p className='closeForm-btn' onClick={props.onClose}>close</p>
            {props.currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput" className="roboto-font">What is your name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={props.name} onKeyDown={(e) => onNextKeyDown(e, 'name', 1)} onChange={(e) => props.setName(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'name'} nr={1} />
                </Form.Group>
            )}

            {props.currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput" className="roboto-font">Your email:</Form.Label>
                    <Form.Control required type="email" name="emailInput" id="emailInput" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                    <Button className='btn-secondary' type='submit'>SUBMIT</Button>

                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={0} />

                </Form.Group>
            )}

        </Form>
    );
}
export default InvestorFormComponent;