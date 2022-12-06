import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Please enter a Valid Email');
            return;
        }
        if (!name || !email || !message) {
            setErrorMessage('All Fields Required!');
            return;
        }
        props.onSubmit({
            name: name,
            email: email,
            text: message,
        });
        setName('');
        setEmail('');
        setMessage('');
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!name) {
            setErrorMessage('Name Field Required!');
            return;
        }
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!email) {
            setErrorMessage('Email Field Required!');
            return;
        }
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        if (!message) {
            setErrorMessage('Message Field Required!');
            return;
        }
    };

    return (
        <div className='contact'>
            <h2 className='d-block w-100 mt-2'>Please reach out!</h2>

            <form className="contact-form d-flex flex-column mx-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="text"
                    className="bucket-input w-75 mb-3 p-2 mt-3"
                    onChange={handleNameChange}
                ></input>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="text"
                    className="bucket-input w-75 mb-3 p-2 mt-3"
                    onChange={handleEmailChange}
                ></input>
                <textarea
                    type="text"
                    placeholder="Message"
                    value={message}
                    name="text"
                    className="bucket-input w-75 mb-3 p-2"
                    onChange={handleMessageChange}
                    style={{ height: 250 }}
                ></textarea>
                <button className="contact-button w-25 btn-one">Send</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm;