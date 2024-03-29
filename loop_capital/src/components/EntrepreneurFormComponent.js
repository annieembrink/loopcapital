import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import ContactFormBackArrow from './ContactFormBackArrow';
import ContactFormNextButton from './ContactFormNextButton';


const EntrepreneurFormComponent = (props) => {

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
        <Form className='flexColumn formComponent roboto-font' onSubmit={(e) => props.postForm(e, 'entrepreneur')}>
            <p className='closeForm-btn roboto-font' onClick={props.onClose}>close</p>
            {props.currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput" className="roboto-font">What is your name?</Form.Label>
                    <Form.Control autoFocus type="text" name="nameInput" id="nameInput" value={props.name} onKeyDown={(e) => onNextKeyDown(e, 'name', 1)} onChange={(e) => props.setName(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'name'} nr={1} />
                </Form.Group>
            )}
            {props.currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="startupInput" className="roboto-font">What is the name of the startup?</Form.Label>
                    <Form.Control autoFocus type="text" name="startupInput" id="startupInput" value={props.startup} onKeyDown={(e) => onNextKeyDown(e, 'startup', 2)} onChange={(e) => props.setStartup(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'startup'} nr={2} />
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={0} />
                </Form.Group>
            )}
            {props.currentInput === 2 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput" className="roboto-font">Your email:</Form.Label>
                    <Form.Control autoFocus type="email" name="emailInput" id="emailInput" value={props.email} onKeyDown={(e) => onNextKeyDown(e, 'email', 3)} onChange={(e) => props.setEmail(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'email'} nr={3} />
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={1} />
                </Form.Group>
            )}
            {props.currentInput === 3 && (
                <Form.Group>
                    <Form.Label htmlFor="subjectInput" className="roboto-font">What problem do you solve?</Form.Label>
                    <Form.Control autoFocus type="text" name="subjectInput" id="subjectInput" value={props.subject} onKeyDown={(e) => onNextKeyDown(e, 'subject', 4)} onChange={(e) => props.setSubject(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'subject'} nr={4} />
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={2} />

                </Form.Group>
            )}
            {props.currentInput === 4 && (
                <Form.Group>
                    <Form.Label htmlFor="messageInput" className="roboto-font">How are you doing this?</Form.Label>
                    <Form.Control autoFocus type="text" name="messageInput" id="messageInput" value={props.message} onKeyDown={(e) => onNextKeyDown(e, 'message', 5)} onChange={(e) => props.setMessage(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'message'} nr={5} />
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={3} />
                </Form.Group>
            )}
            {props.currentInput === 5 && (
                <Form.Group>
                    <Form.Label className="roboto-font">Upload pitch if you have any</Form.Label>
                    <Form.Control className='input-file' type='file' onChange={props.handleFileChange}></Form.Control>
                    <div>{props.file && `${props.file.name} - ${props.file.type}`}</div>

                    <Button className='btn-secondary' type='submit'>SUBMIT</Button>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={4} />
                </Form.Group>
            )}
        </Form>
    );
}
export default EntrepreneurFormComponent;