import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = `Hello, I have a general enquiry:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/919595777723?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');

        // Reset form after submission
        setFormData({ name: '', phone: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="service-hero" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="fade-in-up" style={{ fontSize: '3rem', color: 'var(--secondary-gold)', marginBottom: '1rem' }}>Get in Touch</h1>
                    <p className="fade-in-up" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        We're here to help you plan the perfect heritage journey through the Deccan.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="contact-grid">

                    {/* Contact Info Sidebar */}
                    <div className="contact-info-panel fade-in-up">
                        <h2 className="info-title">Contact Information</h2>
                        <p className="info-desc">Reach out to us directly or fill out the form, and our heritage travel consultants will get back to you shortly.</p>

                        <ul className="info-list">
                            <li>
                                <div className="info-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>Chhatrapati Sambhajinagar,<br />Maharashtra, India</p>
                                </div>
                            </li>
                            <li>
                                <div className="info-icon">
                                    <Phone size={24} />
                                </div>
                                <div className="info-content">
                                    <h4>WhatsApp & Call</h4>
                                    <p><a href="https://wa.me/919595777723" target="_blank" rel="noopener noreferrer">+91 9595777723</a></p>
                                    <span className="info-sub">Click to chat on WhatsApp</span>
                                </div>
                            </li>
                            <li>
                                <div className="info-icon">
                                    <Mail size={24} />
                                </div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@ajantaelloraodyssey.com">info@ajantaelloraodyssey.com</a></p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="form-title">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Your Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 234 567 8900"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label>Message *</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you plan your trip?"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full submit-btn-large">
                                Send Message via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="map-container fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3bdcb05d46788921%3A0x6677e92c1a5181b6!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709230000000!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
