    const createFormData = (string) => {
    const fd = new FormData()

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

        createFormData(string)
        setShowForm(false)
        setFormSubmitted(true)

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
    }

    const onNextClick = (input, nr) => {
        if (input === 'email') {
            validateEmail(email, nr)
        } else if (input === 'name') {
            validateText(name, nr)
        } else if (input === 'subject') {
            validateText(subject, nr)
        } else if (input === 'message') {
            validateText(message, nr)
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
        if (!result) {
            setValidationError('Not a valid email')
        } else {
            setCurrentInput(nr)
            setValidationError('')
        }
    }

    const validateText = (text, nr) => {
        console.log('validate text')
        if (text.length === 0) {
            setValidationError('Text too short')
        } else if (text.length > 5) {
            setValidationError('Text too long')
        } else {
            setValidationError('')
            setCurrentInput(nr)
        }
    }


 
export {validateText, validateEmail, onClose, onBackClick, onNextClick, postForm, handleFileChange};