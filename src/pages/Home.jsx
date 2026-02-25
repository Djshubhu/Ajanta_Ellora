import React from 'react';
import HeroSlider from '../components/HeroSlider';
import TourOptions from '../components/TourOptions';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    // We need a way to trigger the enquiry modal from the HeroSlider
    // In App.jsx, we passed it to Navbar, but we can also use a custom event or context.
    // For simplicity, we'll listen to a custom event or pass a prop down.
    // Actually, we can assume the parent App passes context if using Outlet, but we rendered Home directly in Route.

    // Let's dispatch a custom event that App.jsx can listen to
    const handleOpenEnquiry = () => {
        const event = new CustomEvent('openEnquiry');
        window.dispatchEvent(event);
    };

    return (
        <div className="home-page">
            <HeroSlider onOpenEnquiry={handleOpenEnquiry} />

            <section className="welcome-section section-padding text-center">
                <div className="container">
                    <div className="max-w-3xl mx-auto fade-in-up">
                        <h2 className="text-secondary-gold text-sm tracking-widest uppercase mb-4" style={{ color: 'var(--secondary-gold)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '600' }}>Welcome to Ajanta Ellora Odyssey</h2>
                        <h3 className="section-title mb-6" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>A Journey Through Time</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
                            We are the premier curators of luxury heritage experiences in the Deccan region.
                            Our expertly designed itineraries take you beyond the surface of the world-renowned Ajanta and Ellora Caves,
                            revealing the deep spiritual and architectural history of Maharashtra inside premium comfort.
                        </p>
                    </div>
                </div>
            </section>

            <TourOptions />

            <section className="why-choose-us section-padding" style={{ backgroundColor: 'var(--primary-blue)', color: 'var(--bg-white)', padding: '5rem 0' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'var(--secondary-gold)', fontSize: '2.5rem', marginBottom: '3rem' }}>The Premium Experience</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏰</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--bg-white)' }}>Expert Heritage Mentors</h4>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Travel with certified cultural experts who bring the ancient rocks to life with captivating storytelling.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚘</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--bg-white)' }}>Luxury Fleet</h4>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Chauffeur-driven premium sedans and SUVs ensuring a seamless, comfortable journey across the Deccan terrain.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛎️</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--bg-white)' }}>Curated Stays</h4>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Handpicked 4 and 5-star accommodations that blend modern luxury with traditional Indian hospitality.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--bg-white)' }}>Safety & Comfort</h4>
                            <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>Meticulous planning focusing on western hygiene standards, bottled mineral water, and premium dining.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
