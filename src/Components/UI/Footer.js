import React from 'react';
import './Footer.css';
import logo from '../../assets/cm0-b2c2164d5056a34_b2c21a3f-5056-a348-3a45eafebec976e8.jpeg'; // replace with the actual path to your logo image

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-hours">
                <h4>Open Hours</h4>
                <p>Mon: 11am - 12am</p>
                <p>Tue: 11am - 12am</p>
                <p>Wed: 11am - 12am</p>
                <p>Thu: 11am - 2am</p>
                <p>Fri: 11am - 2am</p>
                <p>Sat: 12pm - 2am</p>
                <p>Sun: 12pmm - 12am</p>
            </div>
            <div className="footer-nav">
                <h4>Navigation</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-location">
                <h4>Location</h4>
                <p>195 Starpoint Dr,</p>
                <p>Fayetteville, NC 28303</p>
                <p>Phone: 910-339-8005</p>
            </div>
            <div className="footer-admin">
                <p>&copy; 2023 Charlie Mike's</p>
                <p>Design and created by <a href="https://www.bullcitydevelopment.com/">Bull City Development</a></p>
            </div>
        </footer>
    );
}

export default Footer;
