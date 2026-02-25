import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenEnquiry }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="logo-link">
                    <div className="logo-text">
                        <span className="logo-title">Ajanta Ellora</span>
                        <span className="logo-subtitle">The Eternal Heritage Trail</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <Link to="/" className="nav-link">Home</Link>

                    <div
                        className="dropdown-container"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="nav-link dropdown-toggle">
                            Tour Options <ChevronDown size={16} />
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <Link to="/tours/express" className="dropdown-item">Express Heritage (1D)</Link>
                            <Link to="/tours/compact" className="dropdown-item">Compact Experience (2D/1N)</Link>
                            <Link to="/tours/classic" className="dropdown-item">Classic Heritage (3D/2N)</Link>
                            <Link to="/tours/nature" className="dropdown-item">Heritage & Nature (4D/3N)</Link>
                            <Link to="/tours/complete" className="dropdown-item">Complete Deccan (5D/4N)</Link>
                        </div>
                    </div>

                    <Link to="/taxi-rental" className="nav-link">Taxi Rental</Link>
                    <Link to="/guide-booking" className="nav-link">Guide Booking</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>

                <div className="navbar-actions">
                    <button className="btn btn-primary enquire-btn" onClick={onOpenEnquiry}>
                        Enquire Now
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="mobile-link">Home</Link>

                <div className="mobile-dropdown">
                    <button
                        className="mobile-link combo"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Tour Options <ChevronDown size={18} className={isDropdownOpen ? 'rotate' : ''} />
                    </button>
                    <div className={`mobile-dropdown-items ${isDropdownOpen ? 'show' : ''}`}>
                        <Link to="/tours/express" className="mobile-sublink">Express Heritage (1D)</Link>
                        <Link to="/tours/compact" className="mobile-sublink">Compact Experience (2D/1N)</Link>
                        <Link to="/tours/classic" className="mobile-sublink">Classic Heritage (3D/2N)</Link>
                        <Link to="/tours/nature" className="mobile-sublink">Heritage & Nature (4D/3N)</Link>
                        <Link to="/tours/complete" className="mobile-sublink">Complete Deccan (5D/4N)</Link>
                    </div>
                </div>

                <Link to="/taxi-rental" className="mobile-link">Taxi Rental</Link>
                <Link to="/guide-booking" className="mobile-link">Guide Booking</Link>
                <Link to="/about" className="mobile-link">About</Link>
                <Link to="/contact" className="mobile-link">Contact</Link>
                <button className="btn btn-primary w-full mt-4" onClick={() => { setIsMobileMenuOpen(false); onOpenEnquiry(); }}>
                    Enquire Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
