import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './HeroSlider.css';

// Using high-quality unsplash/Pexels images as per "real images from internet" requirement
const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1620067644265-b65bf731e846?q=80&w=2070&auto=format&fit=crop', // Ajanta/Cave feel
        title: 'From Monks to Monoliths',
        subtitle: 'Discover the Soul of the Deccan',
        location: 'Ajanta Caves'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1610065099309-848e0294e07a?q=80&w=2070&auto=format&fit=crop', // Ellora/Temple feel
        title: 'Architectural Marvels',
        subtitle: 'Witness the magnificent Kailasa Temple',
        location: 'Ellora Caves'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1598389366657-61c164d1f211?q=80&w=2070&auto=format&fit=crop', // Nature/Crater feel
        title: 'Mystical Nature',
        subtitle: 'Explore the ancient Lonar Crater Lake',
        location: 'Lonar Crater'
    }
];

const HeroSlider = ({ onOpenEnquiry }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Rotate every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const scrollToTours = () => {
        const section = document.getElementById('featured-tours');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-overlay"></div>

                    <div className="slide-content container">
                        <span className="slide-location fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {slide.location}
                        </span>
                        <h1 className="slide-title fade-in-up" style={{ animationDelay: '0.4s' }}>
                            {slide.title}
                        </h1>
                        <p className="slide-subtitle fade-in-up" style={{ animationDelay: '0.6s' }}>
                            {slide.subtitle}
                        </p>

                        <div className="slide-actions fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <button
                                className="btn btn-outline slide-btn"
                                onClick={scrollToTours}
                            >
                                View Tour Options
                            </button>
                            <button
                                className="btn btn-primary slide-btn"
                                onClick={onOpenEnquiry}
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="slider-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="scroll-hint" onClick={scrollToTours}>
                <span className="scroll-text">Scroll Down</span>
                <ChevronDown size={24} className="bounce" />
            </div>
        </div>
    );
};

export default HeroSlider;
