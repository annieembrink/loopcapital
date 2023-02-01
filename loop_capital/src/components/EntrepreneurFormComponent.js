import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EntrepreneurFormComponent = () => {
    return ( 

        <Form className='flexColumn' onSubmit={(e) => postFormData(e)}>
        <Button onClick={() => setShowForm(false)}>Close</Button>
        {currentInput === 0 && (
            <Form.Group>
                <Form.Label htmlFor="nameInput">What is your first name?</Form.Label>
                <Form.Control type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)} />
                <Button onClick={() => onNextClick('name', 1)} >NEXT</Button>
            </Form.Group>
        )}


        {currentInput === 1 && (
            <Form.Group>
                <Form.Label htmlFor="emailInput">What is your email:</Form.Label>
                <Form.Control type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button onClick={() => onNextClick('email', 2)}>NEXT</Button>
                
                <Button onClick={() => onBackClick(0)}>Back</Button>
            </Form.Group>
        )}


        {currentInput === 2 && (
            <Form.Group>
                <Form.Label htmlFor="subjectInput">Subject:</Form.Label>
                <Form.Control type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <Button onClick={() => onNextClick('subject', 3)}>NEXT</Button>
                
                <Button onClick={() => onBackClick(1)}>Back</Button>
            </Form.Group>
        )}


        {currentInput === 3 && (
            <Form.Group>
                <Form.Label htmlFor="messageInput">Message:</Form.Label>
                <Form.Control type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button onClick={() => onNextClick('message', 4)}>NEXT</Button>

                <Button onClick={() => onBackClick(2)}>Back</Button>
            </Form.Group>
        )}

    {currentInput === 4 && (
    <Button type='submit'>Submit the form</Button>
    )}

    </Form>
     );
}
 
export default EntrepreneurFormComponent;