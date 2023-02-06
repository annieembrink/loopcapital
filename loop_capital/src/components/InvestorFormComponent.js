import Form from 'react-bootstrap/Form';

const InvestorFormComponent = (props) => {

    return ( 
        <Form className='flexColumn' onSubmit={(e) => props.postForm(e, 'investor')}>
           
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
                <Form.Label htmlFor="emailInput">Your email:</Form.Label>
                <Form.Control type="email" name="emailInput" id="emailInput" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
                <button type='submit'>SUBMIT</button>
                
                <button type='button' onClick={() => props.onBackClick(0)}>Back</button>
            </Form.Group>
        )}

    </Form>
     );
}
 
export default InvestorFormComponent;