import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const ContactFormComponent = ({ setShowForm, setClientMessage, setFormSubmitted, helloMessage }) => {

    const [name, setName] = useState('');
    const [startup, setStartup] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null)
    const [validationError, setValidationError] = useState('')
    const [currentInput, setCurrentInput] = useState(0)

    const fd = new FormData()
    fd.append('your-name', name)
    fd.append('your-email', email)
    fd.append('your-subject', subject)
    fd.append('your-message', message)
    fd.append('your-file', file)

    const handleFileChange = (e) => {
        console.log(e.target.files)
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
      };

    const postForm = (e) => {
        e.preventDefault()
        console.log('running postForm')

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

    const onClose = () => {
        setShowForm(false)
        setCurrentInput(0)
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
        console.log('validate text')
        if (text.length === 0) {
            setValidationError('Text too short')
        } else if (text.length > 5) {
            setValidationError('Text too long')
        } else {
            setValidationError('')
            setCurrentInput(nr)
        }
    }

    return (

        <>
        <h1>{helloMessage}</h1>

        {/* Entrepreneur */}

        <Form className='flexColumn' onSubmit={(e) => postForm(e)}>
           
            <button type='button' onClick={() => onClose()}>Close</button>

            {currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('name', 1)} >NEXT</button>
                </Form.Group>
            )}
            {currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="startupInput">What is the name of the startup?</Form.Label>
                    <Form.Control type="text" name="startupInput" id="startupInput" value={startup} onChange={(e) => setStartup(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('startup', 2)} >NEXT</button>
                </Form.Group>
            )}


            {currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                    <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('email', 2)}>NEXT</button>
                    
                    <button type='button' onClick={() => onBackClick(0)}>Back</button>
                </Form.Group>
            )}


            {currentInput === 2 && (
                <Form.Group>
                    <Form.Label htmlFor="subjectInput">Subject:</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('subject', 3)}>NEXT</button>
                    
                    <button type='button' onClick={() => onBackClick(1)}>Back</button>
                </Form.Group>
            )}


            {currentInput === 3 && (
                <Form.Group>
                    <Form.Label htmlFor="messageInput">Message:</Form.Label>
                    <Form.Control type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('message', 4)}>NEXT</button>

                    <button type='button' onClick={() => onBackClick(2)}>Back</button>
                </Form.Group>
            )}

            {currentInput === 4 && (
            <Form.Group>
                <Form.Label>Want to add a file?</Form.Label>
                <Form.Control type='file' onChange={handleFileChange}></Form.Control>
                <div>{file && `${file.name} - ${file.type}`}</div>
                
                <button type='submit'>SUBMIT</button>

                <button type='button' onClick={() => onBackClick(3)}>Back</button>
            </Form.Group>
            )}

        </Form>

        {/* Investor */}

        <Form className='flexColumn' onSubmit={(e) => postForm(e)}>
           
            <button type='button' onClick={() => onClose()}>Close</button>

            {currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('name', 1)} >NEXT</button>
                </Form.Group>
            )}


            {currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                    <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type='button' onClick={() => onNextClick('email', 2)}>NEXT</button>
                    
                    <button type='button' onClick={() => onBackClick(0)}>Back</button>
                </Form.Group>
            )}

        </Form>

        <p>{validationError}</p>
        </>

    );
}

export default ContactFormComponent;