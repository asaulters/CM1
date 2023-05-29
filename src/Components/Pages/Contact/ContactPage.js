import React from 'react';
import './ContactPage.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
            
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
