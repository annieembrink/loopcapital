import { useState } from 'react';
import EntrepreneurFormComponent from './EntrepreneurFormComponent';
import InvestorFormComponent from './InvestorFormComponent';

const ContactFormComponent = ({ setShowForm, helloMessage, setHelloMessage, setFormSubmitted, setClientMessage }) => {

    const [name, setName] = useState('');
    const [startup, setStartup] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null)
    const [validationError, setValidationError] = useState('')
    const [currentInput, setCurrentInput] = useState(0)
    const fd = new FormData()

    const createFormData = (string) => {
    
        if(string === 'entrepreneur') {
            fd.append('your-name', name)
            fd.append('your-email', email)
            fd.append('your-subject', subject)
            fd.append('your-message', message)
            fd.append('your-file', file)
        } else {
            fd.append('your-name', name)
            fd.append('your-email', email)
        }

    }
    
    const handleFileChange = (e) => {
        console.log(e.target.files)
        if (e.target.files) {
        setFile(e.target.files[0]);
        }
    };

    const postForm = (e, string) => {
        e.preventDefault()
        console.log('running postForm')

        setShowForm(false)
        setFormSubmitted(true)
        createFormData(string)

        if(string === 'entrepreneur') {
        console.log('entrepreneur')
        fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/17/feedback', {
            method: 'POST',
            body: fd
        })
        } else {
        console.log('investor')
        // VALIDATE EMAIL
            fetch('https://172-104-145-53.ip.linodeusercontent.com/wp-json/contact-form-7/v1/contact-forms/137/feedback', {
                method: 'POST',
                body: fd
            })
        }
        setClientMessage('Successfully sent form!')
        console.log('fd', fd)
    }

    const onNextClick = (input, nr) => {
        console.log('on next', input)
        if (input === 'email') {
            console.log('enters here?')
            validateEmail(email, nr)
        } else if (input === 'name') {
            validateText(name, nr)
        } else if (input === 'subject') {
            validateText(subject, nr)
        } else if (input === 'message') {
            validateText(message, nr)
        } else if (input === 'startup') {
            validateText(startup, nr)
        } 
    }

    const onBackClick = (nr) => {
        setCurrentInput(nr)
        setValidationError('')
    }

    const onClose = () => {
        setShowForm(false)
        setCurrentInput(0)
        setHelloMessage('')
    }

    const validateEmail = (email, nr) => {
        const result = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        console.log('result', result)
        if (!result) {
            setValidationError('Not a valid email')
        } else {
            setCurrentInput(nr)
            setValidationError('')
        }
    }

    const validateText = (text, nr) => {
        console.log('validate text', text, nr)
        if (text.length === 0) {
            setValidationError('Text too short')
        } else if (text.length > 5) {
            setValidationError('Text too long')
        } else {
            setValidationError('')
            setCurrentInput(nr)
        }
    }

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
        createFormData,
        handleFileChange,
        postForm,
        onNextClick,
        onBackClick,
        onClose,
        validateEmail,
        validateText
    }

    return (

        <>
        <h1>{helloMessage}</h1>
       
       {helloMessage === 'Hello Entrepreneur' ? 
       <EntrepreneurFormComponent {...childProps}/> 
       :
       <InvestorFormComponent {...childProps}/>
       }
        <p>{validationError}</p>
        </>
    );
}

export default ContactFormComponent;