import React, { useState } from 'react';

function ContactForm (props) {
    const [message, setMessage] = useState ('');
    const [email, setEmail] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            email: email,
            text: message,
        });
        setEmail('');
        setMessage('');
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
             <form className="contact-form d-flex flex-column justify-content-end" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="text"
                    className="bucket-input w-75 mb-3 p-2 mt-3"
                    onChange={handleEmailChange}
                ></input>
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    name="text"
                    className="bucket-input w-75 mb-3 p-2"
                    onChange={handleMessageChange}
                ></input>
                <button className="contact-button w-25">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;