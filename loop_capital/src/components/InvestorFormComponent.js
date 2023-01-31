import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InvestorFormComponent = ({setShowForm}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [currentInput, setCurrentInput] = useState(0)

    

    const postFormData = (e) => {
        e.preventDefault()
    
        fetch('/api/sendFormData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, subject, message})
        })
        .then(res => res.json())
        .then(data => console.log('data', data))
    }

    return ( 

        <Form className='flexColumn' onSubmit={postFormData}>
                    <Button onClick={() => setShowForm(false)}>Close</Button>
                    {currentInput === 0 && (
                    <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your first name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Button onClick={() => setCurrentInput(1)} disabled={name.length === 0}>NEXT</Button>
                    </Form.Group>
                    )}
                    

                    {currentInput === 1 && (
                          <Form.Group>
                          <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                          <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <Button onClick={() => setCurrentInput(2)} disabled={email.length === 0}>NEXT</Button>
                          <Button onClick={() => setCurrentInput(0)}>Back</Button>
                          </Form.Group>
                    )}
                  

                    {currentInput === 2 && (
                    <Form.Group>
                    <Form.Label htmlFor="subjectInput">Subject:</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <Button onClick={() => setCurrentInput(3)} disabled={subject.length === 0}>NEXT</Button>
                    <Button onClick={() => setCurrentInput(1)}>Back</Button>
                    </Form.Group>
                    )}
                    

                    {currentInput === 3 && (
                        <Form.Group>
                        <Form.Label htmlFor="messageInput">Message:</Form.Label>
                        <Form.Control type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <Button type='submit' disabled={message.length === 0}>SEND</Button>
                        <Button type='submit' onClick={() => setCurrentInput(2)}>Back</Button>
                        </Form.Group>
                    )}

            </Form>

     );
}
 
export default InvestorFormComponent;