import { useEffect, useState } from 'react';
import {Form} from 'react-bootstrap'

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

    return ( 

        <Form className='flexColumn'>
                    {currentInput === 0 && (
                    <div>
                    <label htmlFor="nameInput">Your name:</label>
                    <input type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button onClick={() => setCurrentInput(1)} disabled={name.length === 0}>OK</button>
                    </div>
                    )}
                    

                    {currentInput === 1 && (
                          <div>
                          <label htmlFor="emailInput">Your email:</label>
                          <input required type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <button onClick={() => setCurrentInput(2)} disabled={email.length === 0}>OK</button>
                          </div>
                    )}
                  

                    {currentInput === 2 && (
                    <div>
                    <label htmlFor="subjectInput">Subject:</label>
                    <input required type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <button onClick={() => setCurrentInput(3)} disabled={subject.length === 0}>OK</button>
                    </div>
                    )}
                    

                    {currentInput === 3 && (
                        <div>
                        <label htmlFor="messageInput">Message:</label>
                        <input required type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        <button onClick={() => postFormData()} disabled={message.length === 0}>Submit</button>
                        </div>
                    )}

            </Form>

     );
}
 
export default ContactFormComponent;