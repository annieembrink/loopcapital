import Form from 'react-bootstrap/Form';
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

    return ( 
        <Form className='flexColumn' onSubmit={(e) => props.postForm(e, 'investor')}>
           
        <p onClick={props.onClose}>Close</p>

        {props.currentInput === 0 && (
            <Form.Group>
                <Form.Label htmlFor="nameInput">What is your name?</Form.Label>
                <Form.Control type="text" name="nameInput" id="nameInput" value={props.name} onChange={(e) => props.setName(e.target.value)} />
                <ContactFormNextButton {...childProps} string={'name'} nr={1}/>
            </Form.Group>
        )}

        {props.currentInput === 1 && (
            <Form.Group>
                <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                <Form.Control type="email" name="emailInput" id="emailInput" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                <button type='submit'>SUBMIT</button>
                
                <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={0}/>

            </Form.Group>
        )}

    </Form>
     );
}
 
export default InvestorFormComponent;