
import { useEffect, useState } from 'react';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

const Contact = () => {
    const [form, setForm] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showElement, setShowElement] = useState(true)
    const formData = {'your-name': name, 'your-email': email, 'your-subject': subject, 'your-message': message}


const postFormData = (e) => {
    e.preventDefault()

    const fd = new FormData()
    fd.append('your-name', name)
    fd.append('your-email', email)
    fd.append('your-subject', subject)
    fd.append('your-message', message)

// console.log(fd.getAll('your-name'))
        console.log(Object.fromEntries(fd)) // Works if all fields are uniq
        console.log(e.target)

        fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/17/feedback', {
            method: 'POST',
            // headers: {'Content-Type': 'application/json'},
            // headers: {'Content-Type': 'multipart/form-data'},
            body: fd
        })
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                console.log('formdata', formData) 

            });
    
    if (!form) {
        return <div>Loading...</div>;
    }

}

const btnOnclick = (e) => {
    console.log('test', e.target.parentElement, e.target.parentElement.nextElementSibling)
    e.target.parentElement.hidden = true
    e.target.parentElement.nextElementSibling.hidden = false
}

    
    return (
        <DefaultLayoutComponent>
            <h1>This is the contact page</h1>
            <div>
                <p>Here is the form</p>
                <div className='flexColumn'>

                    <div hidden={false}>
                    <label htmlFor="nameInput">Your name:</label>
                    <input type="text" name="nameInput" id="nameInput" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button onClick={(e) => btnOnclick(e)}>OK</button>
                    </div>

                    <div hidden={true}>
                    <label htmlFor="emailInput">Your email:</label>
                    <input type="email" name="emailInput" id="emailInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={(e) => btnOnclick(e)}>OK</button>
                    </div>

                    <div hidden={true}>
                    <label htmlFor="subjectInput">Subject:</label>
                    <input type="text" name="subjectInput" id="subjectInput" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    <button onClick={(e) => btnOnclick(e)}>OK</button>
                    </div>

                    <div hidden={true}>
                    <label htmlFor="messageInput">Message:</label>
                    <input type="text" name="messageInput" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)}/>
                    {/* <button onClick={(e) => btnOnclick(e)}>OK</button> */}
                    <button onClick={postFormData}>Submit form</button>

                    </div>

                    {/* <input type="submit" value="Submit" /> */}
                </div>
            </div>
        </DefaultLayoutComponent>
    );
}

export default Contact; 




