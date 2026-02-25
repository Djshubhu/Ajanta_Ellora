import { MapPin, Clock, Star, Shield } from 'lucide-react';

export const tourData = [
    {
        id: 'express',
        slug: 'express-heritage',
        title: 'Express Heritage',
        duration: '1 Day',
        shortDesc: 'Perfect for quick visitors. A concentrated dose of Ajanta or Ellora.',
        image: 'https://images.unsplash.com/photo-1620067644265-b65bf731e846?q=80&w=1000&auto=format&fit=crop', // Ajanta
        path: '/tours/express',
        highlights: ['Choice of Ajanta OR Ellora', 'Expert Guided Tour', 'Lunch Included'],
        popular: false
    },
    {
        id: 'compact',
        slug: 'compact-experience',
        title: 'Compact Experience',
        duration: '2 Days / 1 Night',
        shortDesc: 'The essential UNESCO Heritage duo - Ajanta and Ellora in a crisp itinerary.',
        image: 'https://images.unsplash.com/photo-1610065099309-848e0294e07a?q=80&w=1000&auto=format&fit=crop', // Ellora
        path: '/tours/compact',
        highlights: ['Ajanta & Ellora Caves', 'Bibi Ka Maqbara', '1N Hotel Stay'],
        popular: true
    },
    {
        id: 'classic',
        slug: 'classic-heritage',
        title: 'Classic Heritage',
        duration: '3 Days / 2 Nights',
        shortDesc: 'Our most sought-after tour covering caves, forts, and cultural landmarks.',
        image: 'https://images.unsplash.com/photo-1587847496035-7ffc930be0e5?q=80&w=1000&auto=format&fit=crop', // Bibi Ka Maqbara
        path: '/tours/classic',
        highlights: ['Ajanta & Ellora', 'Daulatabad Fort', 'Bibi Ka Maqbara', '2N Premium Stay'],
        popular: true
    },
    {
        id: 'nature',
        slug: 'heritage-and-nature',
        title: 'Heritage & Nature',
        duration: '4 Days / 3 Nights',
        shortDesc: 'Combines the ancient man-made caves with the mystical Lonar Crater Lake.',
        image: 'https://images.unsplash.com/photo-1598389366657-61c164d1f211?q=80&w=1000&auto=format&fit=crop', // Lonar style
        path: '/tours/nature',
        highlights: ['Lonar Crater Expedition', 'Ajanta & Ellora', '3N Premium Stay'],
        popular: false
    },
    {
        id: 'complete',
        slug: 'complete-deccan',
        title: 'Complete Deccan',
        duration: '5 Days / 4 Nights',
        shortDesc: 'The ultimate immersive experience covering all major regional attractions.',
        image: 'https://images.unsplash.com/photo-1621245788107-1b0336ae98cc?q=80&w=1000&auto=format&fit=crop', // Daulatabad Fort
        path: '/tours/complete',
        highlights: ['All Monuments', 'Lonar Crater', 'Paithani Weaving Visit', 'Local Cuisine Tour'],
        popular: false
    }
];
