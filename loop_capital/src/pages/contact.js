
import { useState } from 'react';
import ContactFormComponent from '@/components/ContactFormComponent';
import DefaultLayoutComponent from "@/components/DefaultLayoutComponent";

const Contact = () => {
   
    // const [failMessage, setFailMessage] = useState('');
    // const formData = {'your-name': name, 'your-email': email, 'your-subject': subject, 'your-message': message}

    return (
        <DefaultLayoutComponent>
            <h1>Contact</h1>
        <ContactFormComponent/>
        </DefaultLayoutComponent>
    );
}


export default Contact; 