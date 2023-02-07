import { useState } from 'react';
import EntrepreneurFormComponent from './EntrepreneurFormComponent';
import InvestorFormComponent from './InvestorFormComponent';

const ContactFormComponent = (props) => {

    const [name, setName] = useState('');
    const [startup, setStartup] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [validationError, setValidationError] = useState('');
    const [currentInput, setCurrentInput] = useState(0);

    const fd = new FormData();

    const createFormData = (string) => {
        fd.append('your-name', name);
        fd.append('your-email', email);
        if (string === 'entrepreneur') {
            fd.append('your-subject', subject);
            fd.append('your-message', message);
            fd.append('your-file', file);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const postForm = (e, string) => {
        e.preventDefault();
        props.setShowForm(false);
        props.setFormSubmitted(true);
        createFormData(string);

        if (string === 'entrepreneur') {
            fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/17/feedback', {
                method: 'POST',
                body: fd
            })
        } else {
            // VALIDATE EMAIL
            fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/137/feedback', {
                method: 'POST',
                body: fd
            })
        };
        props.setClientMessage('Successfully sent form!');
    };

    const validateMap = {
        email: email,
        name: name,
        subject: subject,
        message: message,
        startup: startup
    };

    const onNextClick = (input, nr) => {
        const validateFunc = input === 'email' ? validateEmail : validateText;
        validateFunc(validateMap[input], nr);
    };

    // const onBackClick = (nr) => {
    //     setCurrentInput(nr);
    //     setValidationError('');
    // };

    const onClose = () => {
        props.setShowForm(false);
        setCurrentInput(0);
        props.setHelloMessage('');
    };

    const validateEmail = (email, nr) => {
        const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (!result) {
            setValidationError('Not a valid email');
        } else {
            setCurrentInput(nr);
            setValidationError('');
        }
    };

    const validateText = (text, nr) => {
        if (text.length === 0) {
            setValidationError('Text too short');
        } else if (text.length > 500) {
            setValidationError('Text too long');
        } else {
            setValidationError('');
            setCurrentInput(nr);
        };
    };

    const childProps = {
        name,
        setName,
        startup,
        setStartup,
        email,
        setEmail,
        subject,
        setSubject,
        message,
        setMessage,
        file,
        setFile,
        currentInput,
        setCurrentInput,
        setValidationError,
        createFormData,
        handleFileChange,
        postForm,
        onNextClick,
        onClose,
        validateEmail,
        validateText
    }

    return (

        <>
            <h1>{props.helloMessage}</h1>

            {props.helloMessage === 'Hello Entrepreneur' ?
                <EntrepreneurFormComponent {...childProps} />
                :
                <InvestorFormComponent {...childProps} />
            }
            <p>{validationError}</p>
        </>
    );
}

export default ContactFormComponent;