import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EnquiryModal from './components/EnquiryModal';

import Home from './pages/Home';
import TourDetail from './pages/TourDetail';

// Placeholder Pages
const TaxiRental = () => <div className="section-padding container text-center" style={{ marginTop: '100px' }}><h1>Taxi Rental</h1></div>;
const GuideBooking = () => <div className="section-padding container text-center" style={{ marginTop: '100px' }}><h1>Guide Booking</h1></div>;
const About = () => <div className="section-padding container text-center" style={{ marginTop: '100px' }}><h1>About Us</h1></div>;
const Contact = () => <div className="section-padding container text-center" style={{ marginTop: '100px' }}><h1>Contact Us</h1></div>;

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    React.useEffect(() => {
        const handleOpenEnquiry = () => setIsModalOpen(true);
        window.addEventListener('openEnquiry', handleOpenEnquiry);
        return () => window.removeEventListener('openEnquiry', handleOpenEnquiry);
    }, []);

    return (
        <Router>
            <div className="app-container">
                <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tours/:tourId" element={<TourDetail />} />
                        <Route path="/taxi-rental" element={<TaxiRental />} />
                        <Route path="/guide-booking" element={<GuideBooking />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
                <FloatingWhatsApp />
                <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </Router>
    );
}

export default App;
