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

    return ( 
        <Form className='flexColumn formComponent roboto-font' onSubmit={(e) => props.postForm(e, 'entrepreneur')}>

            <p className='closeForm-btn roboto-font' onClick={props.onClose}>close</p>

            {props.currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={props.name} onChange={(e) => props.setName(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'name'} nr={1}/>
                </Form.Group>
            )}
            {props.currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="startupInput">What is the name of the startup?</Form.Label>
                    <Form.Control type="text" name="startupInput" id="startupInput" value={props.startup} onChange={(e) => props.setStartup(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'startup'} nr={2}/>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={0}/>
                </Form.Group>
            )}


            {props.currentInput === 2 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                    <Form.Control type="email" name="emailInput" id="emailInput" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'email'} nr={3}/>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={1}/>
                </Form.Group>
            )}


            {props.currentInput === 3 && (
                <Form.Group>
                    <Form.Label htmlFor="subjectInput">What problem do you solve?</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={props.subject} onChange={(e) => props.setSubject(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'subject'} nr={4}/>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={2}/>

                </Form.Group>
            )}


            {props.currentInput === 4 && (
                <Form.Group>
                    <Form.Label htmlFor="messageInput">How are you doing this?</Form.Label>
                    <Form.Control type="text" name="messageInput" id="messageInput" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
                    <ContactFormNextButton {...childProps} string={'message'} nr={5}/>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={3}/>
                </Form.Group>
            )}

            {props.currentInput === 5 && (
                <Form.Group>
                    <Form.Label>Upload pitch if you have any</Form.Label>
                    <Form.Control type='file' onChange={props.handleFileChange}></Form.Control>
                    <div>{props.file && `${props.file.name} - ${props.file.type}`}</div>
                    
                    <Button className='btn-secondary' type='submit'>SUBMIT</Button>
                    <ContactFormBackArrow setCurrentInput={props.setCurrentInput} setValidationError={props.setValidationError} nr={4}/>
                </Form.Group>
            )}

        </Form>
    );
}

export default EntrepreneurFormComponent;