import React, { useState } from 'react';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className='center'>
            <h2 className='d-block text-center w-100 mt-2'>Please reach out!</h2>

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
                    style={{height: 250}}
                ></textarea>
                <button className="contact-button w-25">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;