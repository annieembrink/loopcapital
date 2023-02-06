import Form from 'react-bootstrap/Form';

const EntrepreneurFormComponent = (props) => {
    return ( 
        <Form className='flexColumn' onSubmit={(e) => props.postForm(e, 'entrepreneur')}>
           
            <button type='button' onClick={() => props.onClose()}>Close</button>

            {props.currentInput === 0 && (
                <Form.Group>
                    <Form.Label htmlFor="nameInput">What is your name?</Form.Label>
                    <Form.Control type="text" name="nameInput" id="nameInput" value={props.name} onChange={(e) => props.setName(e.target.value)} />
                    <button type='button' onClick={() => props.onNextClick('name', 1)} >NEXT</button>
                </Form.Group>
            )}
            {props.currentInput === 1 && (
                <Form.Group>
                    <Form.Label htmlFor="startupInput">What is the name of the startup?</Form.Label>
                    <Form.Control type="text" name="startupInput" id="startupInput" value={props.startup} onChange={(e) => props.setStartup(e.target.value)} />
                    <button type='button' onClick={() => props.onNextClick('startup', 2)} >NEXT</button>

                    <button type='button' onClick={() => props.onBackClick(0)}>Back</button>
                </Form.Group>
            )}


            {props.currentInput === 2 && (
                <Form.Group>
                    <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                    <Form.Control type="email" name="emailInput" id="emailInput" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                    <button type='button' onClick={() => props.onNextClick('email', 3)}>NEXT</button>
                    
                    <button type='button' onClick={() => props.onBackClick(1)}>Back</button>
                </Form.Group>
            )}


            {props.currentInput === 3 && (
                <Form.Group>
                    <Form.Label htmlFor="subjectInput">What problem do you solve?</Form.Label>
                    <Form.Control type="text" name="subjectInput" id="subjectInput" value={props.subject} onChange={(e) => props.setSubject(e.target.value)} />
                    <button type='button' onClick={() => props.onNextClick('subject', 4)}>NEXT</button>
                    
                    <button type='button' onClick={() => props.onBackClick(2)}>Back</button>
                </Form.Group>
            )}


            {props.currentInput === 4 && (
                <Form.Group>
                    <Form.Label htmlFor="messageInput">How are you doing this?</Form.Label>
                    <Form.Control type="text" name="messageInput" id="messageInput" value={props.message} onChange={(e) => props.setMessage(e.target.value)} />
                    <button type='button' onClick={() => props.onNextClick('message', 5)}>NEXT</button>

                    <button type='button' onClick={() => props.onBackClick(3)}>Back</button>
                </Form.Group>
            )}

            {props.currentInput === 5 && (
            <Form.Group>
                <Form.Label>Upload pitch if you have any</Form.Label>
                <Form.Control type='file' onChange={props.handleFileChange}></Form.Control>
                <div>{props.file && `${props.file.name} - ${props.file.type}`}</div>
                
                <button type='submit'>SUBMIT</button>

                <button type='button' onClick={() => props.onBackClick(4)}>Back</button>
            </Form.Group>
            )}

        </Form>
     );
}
 
export default EntrepreneurFormComponent;