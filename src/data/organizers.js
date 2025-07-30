// src/data/organizers.js
// This file contains mock data for event organizers.
// In a real application, you would fetch this from a backend API.

export const organizersData = [
  {
    id: 1,
    name: 'Vibrant Celebrations',
    tagline: 'Crafting unforgettable moments in Bangalore.',
    rating: 4.9,
    reviews: 215,
    priceRange: '₹75,000 - ₹3,00,000',
    location: 'Koramangala',
    image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Vibrant+Celebrations',
    eventType: ['Birthday', 'Anniversary', 'House Party'],
    services: ['Thematic Decor', 'Pro DJ Setup', 'Gourmet Catering', 'Photography'],
    about: 'With over 5 years of experience, Vibrant Celebrations specializes in creating personalized and energetic events. We handle everything from the initial concept to the final execution, ensuring a seamless and stress-free experience for you.',
    gallery: [
      'https://placehold.co/800x600/a78bfa/ffffff?text=Decor+1',
      'https://placehold.co/800x600/c4b5fd/ffffff?text=Party+Setup',
      'https://placehold.co/800x600/ddd6fe/ffffff?text=Catering'
    ],
    packages: [
      { name: 'Essential Birthday Bash', price: '₹75,000', features: ['Standard Decor', 'DJ for 3 hours', 'Snacks & Welcome Drinks'] },
      { name: 'Premium Anniversary Gala', price: '₹1,80,000', features: ['Custom Themed Decor', 'Live Band/DJ', 'Full Course Catering', 'Candid Photographer'] }
    ]
  },
  {
    id: 2,
    name: 'Dream Weavers Events',
    tagline: 'Elegant planning for your special day.',
    rating: 4.8,
    reviews: 180,
    priceRange: '₹1,50,000 - ₹7,00,000',
    location: 'Indiranagar',
    image: 'https://placehold.co/600x400/ec4899/ffffff?text=Dream+Weavers',
    eventType: ['Engagement', 'Wedding', 'Private Dinner'],
    services: ['Luxury Decor', 'Candid Photography', 'Videography', 'Guest Management'],
    about: 'Dream Weavers is a boutique event planning company focusing on elegant and sophisticated events. Our attention to detail and creative flair make every celebration unique and memorable. We specialize in engagements and intimate gatherings.',
    gallery: [
        'https://placehold.co/800x600/f9a8d4/ffffff?text=Engagement+Decor',
        'https://placehold.co/800x600/fbcfe8/ffffff?text=Table+Setting',
        'https://placehold.co/800x600/fce7f3/ffffff?text=Couple+Shot'
    ],
    packages: [
      { name: 'Intimate Engagement', price: '₹2,00,000', features: ['Floral Arch & Stage', 'Photographer (4 hours)', 'Welcome Drinks & Canapés'] },
      { name: 'Luxe Celebration', price: '₹5,50,000', features: ['Designer Decor', 'Photo & Video Team', 'Multi-cuisine Buffet', 'Guest Coordination'] }
    ]
  },
  {
    id: 3,
    name: 'Party People Inc.',
    tagline: 'The ultimate house party specialists.',
    rating: 4.7,
    reviews: 95,
    priceRange: '₹40,000 - ₹1,20,000',
    location: 'Jayanagar',
    image: 'https://placehold.co/600x400/22c55e/ffffff?text=Party+People',
    eventType: ['House Party', 'Music', 'Birthday'],
    services: ['Sound & Lighting', 'Bartender', 'Interactive Games', 'Snacks'],
    about: 'We bring the club to your home! Party People Inc. is all about high-energy, fun-filled house parties. From amazing sound systems to professional bartenders, we have everything to make your party the talk of the town.',
    gallery: [
        'https://placehold.co/800x600/86efac/ffffff?text=DJ+Setup',
        'https://placehold.co/800x600/bbf7d0/ffffff?text=Bar+Counter',
        'https://placehold.co/800x600/dcfce7/ffffff?text=Party+Vibes'
    ],
    packages: [
      { name: 'House Party Starter', price: '₹45,000', features: ['DJ with Sound System', 'Basic Lighting', 'Unlimited Soft Drinks'] },
      { name: 'The Ultimate Blowout', price: '₹1,10,000', features: ['Pro DJ & MC', 'Laser Lights & Smoke Machine', 'Bartender & Mixers', 'Gourmet Appetizers'] }
    ]
  },
];