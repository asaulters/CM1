import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';
import eventsImg from '../assets/295737541_171308795424788_6445302282639074636_n.jpeg'

const Events = () => {
    return (
        <div id="events" className="events-section">
            <div className="events-content">
                <h1>Events</h1>
                <p>
                    Plan your next event with us! We provide a great environment for all types of gatherings.
                    <br/>
                    <Link to="/contact">
                        <button>Contact Us</button>
                    </Link>
                </p>
            </div>
            <div className="events-image">
                <img src={eventsImg} alt='Events'/>
            </div>
        </div>
    );
}

export default Events;
