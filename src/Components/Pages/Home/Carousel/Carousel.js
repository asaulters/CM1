import React, { useState, useEffect } from 'react';
import './Carousel.css'; // the css file for styling your carousel
import image1 from '../assets/carousel-monSpec.jpeg';
import image7 from '../assets/carousel-sunSpec.jpeg';
import image6 from '../assets/carousel-satSpec.jpeg';
import image3 from '../assets/carousel-wedSpec.jpeg';
import image4 from '../assets/carousel-thursSpec.jpeg';
import image2 from '../assets/322570218_6251428941545859_7996286984399344766_n.jpeg'


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselItems = [
        {
            imgSrc: image1,
            writeup: "$1 Off Draft Beer and Wine"
        },
        {
            imgSrc: image2,
            writeup: "$1.75 Domestic Bottles, $5 Margaritas"
        },
        {
            imgSrc: image3,
            writeup: "$6 Call Liquor"
        },        {
            imgSrc: image4,
            writeup: "This is a write-up about the second picture."
        },        {
            imgSrc: image6,
            writeup: "This is a write-up about the second picture."
        },        {
            imgSrc: image7,
            writeup: "$8 Domestic Pitchers, $5 Bloody Mary and Mimosas"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
            <div className="carousel-slide">
                <img className="carousel-image" src={carouselItems[currentSlide].imgSrc} alt="Carousel" />
                <p className="carousel-writeup">{carouselItems[currentSlide].writeup}</p>
            </div>
            <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
        </div>
    );
}

export default Carousel;