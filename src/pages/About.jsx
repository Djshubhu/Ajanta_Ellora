import React, { useEffect } from 'react';
import { Award, GraduationCap, MapPin, Building } from 'lucide-react';
import './About.css';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container text-center">
                    <h1 className="fade-in-up section-title" style={{ color: 'var(--primary-blue)', fontSize: '3.5rem', marginBottom: '1rem' }}>About The Eternal Heritage Trail</h1>
                    <p className="fade-in-up section-subtitle mx-auto" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
                        Curating luxury journeys through the ancient heart of the Deccan, blending profound historical insight with uncompromising modern comfort.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="mentor-profile fade-in-up">
                    <div className="mentor-sidebar">
                        <div className="mentor-image-wrapper">
                            {/* Using a professional portrait placeholder for Dr. Jadhav */}
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                                alt="Dr. Subhash Jadhav"
                                className="mentor-image"
                            />
                        </div>
                        <div className="mentor-credentials">
                            <div className="credential-item">
                                <GraduationCap size={20} className="text-secondary-gold" />
                                <span>Ph.D. in Heritage Management</span>
                            </div>
                            <div className="credential-item">
                                <Award size={20} className="text-secondary-gold" />
                                <span>ASI Accredited Expert</span>
                            </div>
                            <div className="credential-item">
                                <Building size={20} className="text-secondary-gold" />
                                <span>Corporate Hospitality Specialist</span>
                            </div>
                        </div>
                    </div>

                    <div className="mentor-content">
                        <h2 className="mentor-name">Dr. Subhash Jadhav</h2>
                        <h3 className="mentor-title">Cultural Mentor & Heritage Expert</h3>

                        <div className="mentor-bio">
                            <p>
                                Dr. Subhash Jadhav is the visionary force behind Ajanta Ellora Odyssey. With over two decades of dedicated research into the architectural and spiritual majesty of the Deccan plateau, he has transformed historical tourism into an art form of cultural mentoring.
                            </p>

                            <p>
                                His academic background in heritage preservation is matched only by his deep, practical understanding of modern luxury travel. Dr. Jadhav's approach moves beyond standard 'guiding'; he mentors travelers, helping them decipher the complex iconography of Buddhist, Jain, and Hindu monuments.
                            </p>

                            <div className="vision-box">
                                <h4 className="vision-title">The Preservation Vision</h4>
                                <p>
                                    "Heritage is not merely preserved in stone; it is kept alive in the minds of those who witness it. Our mission is to facilitate that connection for discerning global travelers, ensuring sustainable and respectful interaction with these ancient monuments."
                                </p>
                            </div>

                            <p>
                                Dr. Jadhav specializes in curating bespoke experiences for corporate delegates, foreign dignitaries, and discerning luxury travelers. His network ensures access to the finest fleet, the most knowledgeable local scholars, and the highest standards of hospitality in Chhatrapati Sambhajinagar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
