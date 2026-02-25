import React, { useState } from 'react';
import { X } from 'lucide-react';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        people: '',
        duration: '',
        tourOption: '',
        hotelCategory: '',
        vehicle: '',
        date: '',
        requirements: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const text = `Hello, I am interested in:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Tour Option: ${formData.tourOption}
Duration: ${formData.duration}
People: ${formData.people}
Hotel Category: ${formData.hotelCategory}
Vehicle: ${formData.vehicle}
Date: ${formData.date}
Special Requirements: ${formData.requirements}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/919595777723?text=${encodedText}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Plan Your Heritage Trail</h2>
                    <button className="close-btn" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="enquiry-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Full Name *</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Number of People *</label>
                            <input type="number" name="people" min="1" required value={formData.people} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Duration *</label>
                            <select name="duration" required value={formData.duration} onChange={handleChange}>
                                <option value="">Select Duration</option>
                                <option value="1 Day">1 Day</option>
                                <option value="2 Days">2 Days</option>
                                <option value="3 Days">3 Days</option>
                                <option value="4 Days">4 Days</option>
                                <option value="5 Days">5 Days</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Tour Option *</label>
                            <select name="tourOption" required value={formData.tourOption} onChange={handleChange}>
                                <option value="">Select Option</option>
                                <option value="Classic Heritage (3D/2N)">Classic Heritage (3D/2N)</option>
                                <option value="Compact Experience (2D/1N)">Compact Experience (2D/1N)</option>
                                <option value="Express Heritage (1D)">Express Heritage (1D)</option>
                                <option value="Heritage & Nature (4D/3N)">Heritage & Nature (4D/3N)</option>
                                <option value="Complete Deccan (5D/4N)">Complete Deccan (5D/4N)</option>
                                <option value="Taxi Rental Only">Taxi Rental Only</option>
                                <option value="Guide Only">Guide Only</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Hotel Category</label>
                            <select name="hotelCategory" value={formData.hotelCategory} onChange={handleChange}>
                                <option value="">Select Category</option>
                                <option value="3 Star">3 Star</option>
                                <option value="4 Star">4 Star</option>
                                <option value="5 Star">5 Star</option>
                                <option value="No Hotel Needed">No Hotel Needed</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Vehicle Type</label>
                            <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
                                <option value="">Select Vehicle</option>
                                <option value="AC Sedan">AC Sedan</option>
                                <option value="AC SUV">AC SUV (Innova/Similar)</option>
                                <option value="Innova Crysta">Innova Crysta</option>
                                <option value="Premium Options">Mercedes/Fortuner</option>
                                <option value="Tempo Traveller">Tempo Traveller</option>
                            </select>
                        </div>

                        <div className="form-group full-width">
                            <label>Date of Journey *</label>
                            <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                        </div>

                        <div className="form-group full-width">
                            <label>Special Requirements</label>
                            <textarea
                                name="requirements"
                                rows="3"
                                placeholder="Any specific places you want to visit, dietary requirements, etc."
                                value={formData.requirements}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        Send Enquiry via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryModal;
