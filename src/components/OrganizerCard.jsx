// src/components/OrganizerCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

const OrganizerCard = ({ organizer }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group">
      <Link to={`/organizer/${organizer.id}`}>
        <div className="relative">
          <img className="w-full h-56 object-cover" src={organizer.image} alt={organizer.name} />
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {organizer.location}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 truncate">{organizer.name}</h3>
          <p className="text-gray-500 mt-1 h-10">{organizer.tagline}</p>
          <div className="flex items-center mt-3">
            <div className="flex items-center text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="ml-1.5 text-gray-700 font-bold">{organizer.rating}</span>
            </div>
            <span className="ml-2 text-gray-500">({organizer.reviews} reviews)</span>
          </div>
          <p className="text-lg font-semibold text-gray-800 mt-4">{organizer.priceRange}</p>
        </div>
      </Link>
      <div className="px-6 pb-4">
        <Link to={`/book/${organizer.id}`}>
          <button className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrganizerCard;