import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ContactFormComponent = ({ setShowForm, setClientMessage, setFormSubmitted, helloMessage }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [validationError, setValidationError] = useState('')
    const [currentInput, setCurrentInput] = useState(0)

    const fd = new FormData()
    fd.append('your-name', name)
    fd.append('your-email', email)
    fd.append('your-subject', subject)
    fd.append('your-message', message)

    const validateMessage = (e) => {
        e.preventDefault()

        validateText(message)
    }

    const postForm = () => {
        setClientMessage('Successfully sent form!')
        setShowForm(false)
        setFormSubmitted(true)

        fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/17/feedback', {
            method: 'POST',
            body: fd
        })

    }

    const onNextClick = (input, nr) => {
        if (input === 'email') {
            validateEmail(email, nr)
        } else if (input === 'name') {
            validateText(name, nr)
        } else if (input === 'subject') {
            validateText(subject, nr)
        } else if (input === 'message') {
            validateText(message, nr)
        }
    }

    const onBackClick = (nr) => {
        setCurrentInput(nr)
        setValidationError('')
    }

    const validateEmail = (email, nr) => {
        const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (!result) {
            setValidationError('Not a valid email')
        } else {
            setCurrentInput(nr)
            setValidationError('')
        }
    }

    const validateText = (text, nr) => {
        if (text.length === 0) {
            setValidationError('Text too short')
        } else if (text.length > 5) {
            setValidationError('Text too long')
        } else {
            setValidationError('')
            if (nr) {
                setCurrentInput(nr)
            } else {
                postForm()

            }
        }
    }

    return (

        <>
        <h1>{helloMessage}</h1>

        <Form className='flexColumn' onSubmit={(e) => validateMessage(e)}>
            <button onClick={() => setShowForm(false)}>Close</button>
            
            {currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your first name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
                    <button onClick={() => onNextClick('name', 1)} >NEXT</button>
                </Form.Group>
            )}


            {currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                    <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={() => onNextClick('email', 2)}>NEXT</button>
                    
                    <button onClick={() => onBackClick(0)}>Back</button>
                </Form.Group>
            )}


            {currentInput === 2 && (
                <Form.Group>
                    <Form.Label htmlFor="subjectInput">Subject:</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <button onClick={() => onNextClick('subject', 3)}>NEXT</button>
                    
                    <button onClick={() => onBackClick(1)}>Back</button>
                </Form.Group>
            )}


            {currentInput === 3 && (
                <Form.Group>
                    <Form.Label htmlFor="messageInput">Message:</Form.Label>
                    <Form.Control type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='submit'>SUBMIT</button>

                    <button onClick={() => onBackClick(2)}>Back</button>
                </Form.Group>
            )}

        </Form>

        <p>{validationError}</p>
        </>

    );
}

export default ContactFormComponent;