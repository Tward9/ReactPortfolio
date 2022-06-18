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
             <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="text"
                    className="bucket-input"
                    onChange={handleEmailChange}
                ></input>
                <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    name="text"
                    className="bucket-input"
                    onChange={handleMessageChange}
                ></input>
                <button className="contact-button">Send</button>
            </form>
        </div>
    )
}

export default ContactForm;