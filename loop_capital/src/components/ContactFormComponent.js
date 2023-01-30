import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactFormComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [currentInput, setCurrentInput] = useState(0)

    const fd = new FormData()
    fd.append('your-name', name)
    fd.append('your-email', email)
    fd.append('your-subject', subject)
    fd.append('your-message', message)

    const postFormData = (e) => {
        e.preventDefault()
        console.log(name, email, subject, message)
    
        fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/17/feedback', {
            method: 'POST',
            body: fd
        })
    }

    return ( 

        <Form className='flexColumn' onSubmit={postFormData}>
                    {currentInput === 0 && (
                    <Form.Group>
                    <Form.Label htmlFor="nameInput">Your name:</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Button onClick={() => setCurrentInput(1)} disabled={name.length === 0}>OK</Button>
                    </Form.Group>
                    )}
                    

                    {currentInput === 1 && (
                          <Form.Group>
                          <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                          <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <Button onClick={() => setCurrentInput(2)} disabled={email.length === 0}>OK</Button>
                          </Form.Group>
                    )}
                  

                    {currentInput === 2 && (
                    <Form.Group>
                    <Form.Label htmlFor="subjectInput">Subject:</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <Button onClick={() => setCurrentInput(3)} disabled={subject.length === 0}>OK</Button>
                    </Form.Group>
                    )}
                    

                    {currentInput === 3 && (
                        <Form.Group>
                        <Form.Label htmlFor="messageInput">Message:</Form.Label>
                        <Form.Control type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <Button type='submit' disabled={message.length === 0}>Submit</Button>
                        </Form.Group>
                    )}

            </Form>

     );
}
 
export default ContactFormComponent;