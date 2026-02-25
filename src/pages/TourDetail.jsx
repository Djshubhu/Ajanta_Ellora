import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, Clock, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { tourData } from '../data/tourData';
import { tourSchedules } from '../data/tourSchedules';
import './TourDetail.css';

const TourDetail = () => {
    const { tourId } = useParams();

    // Find the basic tour info
    const tour = tourData.find(t => t.id === tourId);

    // Find the detailed schedule
    const schedule = tourSchedules[tourId];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [tourId]);

    if (!tour || !schedule) {
        return <Navigate to="/" />;
    }

    const handleBookClick = () => {
        const event = new CustomEvent('openEnquiry');
        window.dispatchEvent(event);
    };

    return (
        <div className="tour-detail-page">
            {/* Hero Banner */}
            <div
                className="tour-hero"
                style={{ backgroundImage: `url(${tour.image})` }}
            >
                <div className="tour-hero-overlay"></div>
                <div className="container tour-hero-content">
                    <span className="tour-duration-badge large">
                        <Clock size={20} />
                        {tour.duration}
                    </span>
                    <h1 className="tour-hero-title fade-in-up">{tour.title}</h1>
                </div>
            </div>

            <div className="container section-padding">
                <div className="tour-content-grid">
                    {/* Main Content (Left) */}
                    <div className="tour-main-content">

                        <section className="detail-section">
                            <h2 className="detail-heading">Tour Overview</h2>
                            <p className="detail-text leading-relaxed">
                                {schedule.overview}
                            </p>
                        </section>

                        <section className="detail-section">
                            <h2 className="detail-heading">Itinerary</h2>
                            <div className="itinerary-timeline">
                                {schedule.days.map((day, index) => (
                                    <div className="timeline-item" key={index}>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3 className="day-title">Day {day.day}: {day.title}</h3>
                                            <p className="day-desc">{day.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Sidebar (Right) */}
                    <div className="tour-sidebar">
                        <div className="sidebar-card">
                            <h3 className="sidebar-title">Tour Highlights</h3>
                            <ul className="highlight-list">
                                {tour.highlights.map((highlight, idx) => (
                                    <li key={idx}>
                                        <CheckCircle2 size={18} className="text-secondary-gold" style={{ color: 'var(--secondary-gold)' }} />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-card comfort-notes">
                            <h3 className="sidebar-title">Comfort & Notes</h3>
                            <ul className="notes-list">
                                <li>
                                    <AlertCircle size={18} className="text-primary-blue" style={{ color: 'var(--primary-blue)' }} />
                                    <span>Premium Chauffeur Driven AC Vehicle throughout the tour.</span>
                                </li>
                                <li>
                                    <AlertCircle size={18} className="text-primary-blue" style={{ color: 'var(--primary-blue)' }} />
                                    <span>ASI Approved professional guides available on request.</span>
                                </li>
                                <li>
                                    <AlertCircle size={18} className="text-primary-blue" style={{ color: 'var(--primary-blue)' }} />
                                    <span>Ellora Caves are closed on Tuesdays. Ajanta Caves are closed on Mondays.</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            className="btn btn-primary w-full book-btn text-lg"
                            onClick={handleBookClick}
                            style={{ fontSize: '1.1rem', padding: '1rem', width: '100%', marginTop: '1rem' }}
                        >
                            Book This Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetail;
