import React, { useEffect } from 'react';
import { Users, Briefcase, CheckCircle2 } from 'lucide-react';
import './Services.css';

const vehicles = [
    {
        id: 'sedan',
        name: 'AC Premium Sedan',
        models: 'Swift Dzire / Toyota Etios / Similar',
        seats: 4,
        luggage: 3,
        bestFor: 'Couples, Small Families',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop', // Sedan
        features: ['Air Conditioned', 'Spacious Legroom', 'Experienced Chauffeur', 'Mineral Water Provided']
    },
    {
        id: 'suv',
        name: 'AC SUV',
        models: 'Toyota Innova / Ertiga',
        seats: 6,
        luggage: 4,
        bestFor: 'Families, Small Groups',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop', // SUV
        features: ['Dual AC', 'Extra Comfort Seating', 'High Ground Clearance', 'Ample Boot Space']
    },
    {
        id: 'crysta',
        name: 'Innova Crysta',
        models: 'Toyota Innova Crysta',
        seats: 6,
        luggage: 5,
        bestFor: 'Premium Comfort Seekers',
        image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop', // Premium SUV 
        features: ['Captain Seats Available', 'Plush Interiors', 'Supreme Ride Quality', 'Quiet Cabin']
    },
    {
        id: 'luxury',
        name: 'Luxury Segment',
        models: 'Mercedes / Fortuner',
        seats: 4,
        luggage: 4,
        bestFor: 'Corporate Clients, VIPs',
        image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop', // Luxury
        features: ['Ultimate Luxury', 'Red Carpet Service', 'English Speaking Driver', 'Premium Amenities']
    },
    {
        id: 'tempo',
        name: 'Tempo Traveller',
        models: 'Force Motors (12/17/20 Seater)',
        seats: '12-20',
        luggage: 15,
        bestFor: 'Large Groups, Corporate Retreats',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop', // Van/Bus
        features: ['Pushback Seats', 'Individual AC Vents', 'Entertainment System', 'Ample Headroom']
    }
];

const TaxiRental = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBookClick = () => {
        const event = new CustomEvent('openEnquiry');
        window.dispatchEvent(event);
    };

    return (
        <div className="service-page">
            <div className="service-hero bg-primary-blue text-white" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '8rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="fade-in-up" style={{ fontSize: '3rem', color: 'var(--secondary-gold)', marginBottom: '1rem' }}>Premium Fleet Rental</h1>
                    <p className="fade-in-up md-text" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                        Travel the Deccan in absolute comfort. Our meticulously maintained fleet of chauffeur-driven vehicles ensures a safe, relaxing, and luxurious journey.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="vehicle-grid">
                    {vehicles.map((vehicle, index) => (
                        <div className="vehicle-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} key={vehicle.id}>
                            <div className="vehicle-image-container">
                                <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" loading="lazy" />
                            </div>
                            <div className="vehicle-content">
                                <h3 className="vehicle-name">{vehicle.name}</h3>
                                <p className="vehicle-models">{vehicle.models}</p>

                                <div className="vehicle-capacity">
                                    <div className="capacity-item">
                                        <Users size={18} />
                                        <span>{vehicle.seats} Seats</span>
                                    </div>
                                    <div className="capacity-item">
                                        <Briefcase size={18} />
                                        <span>{vehicle.luggage} Bags</span>
                                    </div>
                                </div>

                                <div className="vehicle-best-for">
                                    <strong>Best For:</strong> {vehicle.bestFor}
                                </div>

                                <ul className="vehicle-features">
                                    {vehicle.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <CheckCircle2 size={16} className="text-secondary-gold" style={{ color: 'var(--secondary-gold)', minWidth: '16px' }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="btn btn-primary w-full mt-4" onClick={handleBookClick}>
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaxiRental;
