import Form from 'react-bootstrap/Form';

const EntrepreneurFormComponent = ({postForm, onClose, setName, setStartup, setEmail, setSubject, setMessage, onNextClick, onBackClick}) => {
    return ( 
        <Form className='flexColumn' onSubmit={(e) => postForm(e, 'entrepreneur')}>
           
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
     );
}
 
export default EntrepreneurFormComponent;