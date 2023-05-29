import React from 'react';
import './ContactSection.css'

const ContactSection = () => {
    return (
        <div className="contact-section">
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactSection;
