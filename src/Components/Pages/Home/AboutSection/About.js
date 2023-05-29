import React from 'react';
import './About.css';
import tableImg from '../assets/wooden-board-empty-table-top-blurred-background.jpg';

const About = () => {
    return (
        <div id="about-section">
                <div id="about-section-writeup">
                <h1>About Charlie Mike's</h1>
                <p>
                    At Charlie Mike's, we are not just another restaurant - we're a gathering place, where community comes together. Nestled in the heart of Fayetteville, North Carolina, 
                    our establishment has been serving locals and visitors alike since our doors first opened.
                </p>
                <p>
                    Our name - "Charlie Mike's" - is military slang for "Continue Mission," and it's a motto that we embody every day. We cater to the diverse palette of our 
                    community, proudly serving not just traditional pub fare but also authentic Thai cuisine. Our menu is a testament to our commitment to variety and quality, 
                    with each dish thoughtfully created by our skilled chefs.
                </p>
                <p>
                    We invite you to join us at Charlie Mike's, where our mission is to serve, satisfy, and smile. Let's continue the mission together!
                </p>
            </div>
            <div id='about-Img'>
                <img src={tableImg} alt='table'/>
            </div>
        </div>
    );
}

export default About;
