import React, { useEffect } from 'react';
import { Award, Globe2, BookOpen, Star } from 'lucide-react';
import './Services.css';

const languages = [
    'English', 'Hindi', 'Marathi', 'German', 'Spanish', 'French', 'Italian', 'Japanese'
];

const GuideBooking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBookClick = () => {
        const event = new CustomEvent('openEnquiry');
        window.dispatchEvent(event);
    };

    return (
        <div className="service-page">
            <div className="service-hero" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="fade-in-up" style={{ fontSize: '3rem', color: 'var(--secondary-gold)', marginBottom: '1rem' }}>Expert Heritage Mentors</h1>
                    <p className="fade-in-up" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        The stones speak when guided by knowledge. Book our ASI-approved, deeply knowledgeable cultural mentors to bring the history of Ajanta and Ellora to life.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="guide-features-grid">
                    <div className="guide-feature fade-in-up">
                        <Award size={40} style={{ color: 'var(--secondary-gold)', marginBottom: '1rem' }} />
                        <h3>ASI Approved</h3>
                        <p>Our guides hold official accreditation from the Archaeological Survey of India, ensuring accuracy and depth of knowledge.</p>
                    </div>
                    <div className="guide-feature fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <BookOpen size={40} style={{ color: 'var(--secondary-gold)', marginBottom: '1rem' }} />
                        <h3>Scholarly Depth</h3>
                        <p>Go beyond the surface. Learn about the intricate Buddhist philosophy, Hindu mythology, and structural engineering of the caves.</p>
                    </div>
                    <div className="guide-feature fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <Star size={40} style={{ color: 'var(--secondary-gold)', marginBottom: '1rem' }} />
                        <h3>Premium Service</h3>
                        <p>Polite, well-spoken, and accommodating professionals trained to handle VIP and international corporate clients.</p>
                    </div>
                </div>

                <div className="languages-section mt-12 bg-light p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.3s', backgroundColor: 'var(--bg-white)', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', textAlign: 'center', marginTop: '4rem' }}>
                    <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Multilingual Experts Available</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We provide fluent native-level speakers in the following languages:</p>

                    <div className="languages-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                        {languages.map((lang, index) => (
                            <div key={index} className="language-badge" style={{
                                border: '1px solid var(--border-color)',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontWeight: '500',
                                backgroundColor: 'white'
                            }}>
                                <Globe2 size={16} style={{ color: 'var(--primary-blue)' }} />
                                {lang}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn btn-primary" onClick={handleBookClick} style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Book a Guide Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideBooking;
