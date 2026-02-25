import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle2 } from 'lucide-react';
import { tourData } from '../data/tourData';
import './TourOptions.css';

const TourOptions = () => {
    return (
        <section id="featured-tours" className="section-padding tour-options-section">
            <div className="container">
                <div className="section-header text-center fade-in">
                    <h2 className="section-title">Curated Heritage Experiences</h2>
                    <p className="section-subtitle">
                        Choose from our meticulously planned itineraries, designed for comfort and deep cultural immersion.
                    </p>
                </div>

                <div className="tour-grid">
                    {tourData.map((tour, index) => (
                        <div
                            className={`tour-card fade-in-up ${tour.popular ? 'popular' : ''}`}
                            key={tour.id}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {tour.popular && <div className="popular-badge">Most Popular</div>}

                            <div className="tour-image-wrapper">
                                <img src={tour.image} alt={tour.title} className="tour-image" loading="lazy" />
                                <div className="tour-duration-badge">
                                    <Clock size={16} />
                                    <span>{tour.duration}</span>
                                </div>
                            </div>

                            <div className="tour-card-content">
                                <h3 className="tour-title">{tour.title}</h3>
                                <p className="tour-desc">{tour.shortDesc}</p>

                                <ul className="tour-highlights">
                                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={16} className="highlight-icon" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link to={tour.path} className="btn btn-primary w-full mt-4">
                                    View Full Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TourOptions;
