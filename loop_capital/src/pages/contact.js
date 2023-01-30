
import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

const Contact = () => {
   
    const [failMessage, setFailMessage] = useState('');
    // const formData = {'your-name': name, 'your-email': email, 'your-subject': subject, 'your-message': message}

const postFormData = (e) => {
    e.preventDefault()

    fetch('/api/sendFormData', {
        method: 'post'
        // body: {name, email, subject, message}
    })
    .then(res => res.json())
    .then(data => {
        if(data.success) {
            
            setFailMessage('')
        } else if(data.fail) {
            setFailMessage(data.fail)
        }
    })
}

    return (
        <DefaultLayoutComponent>
            <h1>Contact</h1>
        <ContactFormComponent/>
        </DefaultLayoutComponent>
    );
}

export default Contact; 




