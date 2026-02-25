import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col brand-col">
                    <h3 className="footer-logo">Ajanta Ellora</h3>
                    <p className="footer-subtitle">The Eternal Heritage Trail</p>
                    <p className="footer-desc">
                        Discover the soul of the Deccan with curated luxury tours of Ajanta, Ellora, Lonar, and Chhatrapati Sambhajinagar.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <h4 className="footer-heading">Tour Options</h4>
                    <ul className="footer-links">
                        <li><Link to="/tours/express"><ChevronRight size={16} /> Express Heritage (1D)</Link></li>
                        <li><Link to="/tours/compact"><ChevronRight size={16} /> Compact Experience (2D/1N)</Link></li>
                        <li><Link to="/tours/classic"><ChevronRight size={16} /> Classic Heritage (3D/2N)</Link></li>
                        <li><Link to="/tours/nature"><ChevronRight size={16} /> Heritage & Nature (4D/3N)</Link></li>
                        <li><Link to="/tours/complete"><ChevronRight size={16} /> Complete Deccan (5D/4N)</Link></li>
                    </ul>
                </div>

                <div className="footer-col links-col">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/taxi-rental"><ChevronRight size={16} /> Taxi Rental</Link></li>
                        <li><Link to="/guide-booking"><ChevronRight size={16} /> Guide Booking</Link></li>
                        <li><Link to="/about"><ChevronRight size={16} /> About Us</Link></li>
                        <li><Link to="/contact"><ChevronRight size={16} /> Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4 className="footer-heading">Contact Info</h4>
                    <ul className="contact-info">
                        <li>
                            <MapPin size={20} className="contact-icon" />
                            <span>Chhatrapati Sambhajinagar, Maharashtra, India</span>
                        </li>
                        <li>
                            <Phone size={20} className="contact-icon" />
                            <a href="tel:+919595777723">+91 9595777723</a>
                        </li>
                        <li>
                            <Mail size={20} className="contact-icon" />
                            <a href="mailto:info@ajantaelloraodyssey.com">info@ajantaelloraodyssey.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Ajanta Ellora Odyssey. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
