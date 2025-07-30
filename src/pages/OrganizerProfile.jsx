// src/pages/OrganizerProfile.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { organizersData } from '../data/organizers';
import { Star, MapPin, ChevronLeft } from 'lucide-react';

const OrganizerProfile = () => {
  const { id } = useParams();
  const organizer = organizersData.find(o => o.id === parseInt(id));

  if (!organizer) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold">Organizer not found.</h2>
        <Link to="/explore" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/explore" className="flex items-center text-gray-600 hover:text-indigo-600 mb-8 font-semibold">
          <ChevronLeft size={20} /> Back to results
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-gray-900">{organizer.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{organizer.tagline}</p>
            <div className="flex flex-wrap items-center mt-4 text-lg gap-x-4 gap-y-2">
              <div className="flex items-center text-yellow-500">
                <Star size={22} fill="currentColor" />
                <span className="ml-1.5 text-gray-800 font-bold">{organizer.rating}</span>
                <span className="ml-2 text-gray-600 font-normal">({organizer.reviews} reviews)</span>
              </div>
              <span className="hidden md:block text-gray-300">|</span>
              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-1.5" /> {organizer.location}
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {organizer.gallery.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={`Gallery image ${index + 1}`} className="w-full h-40 object-cover rounded-lg shadow-md" />
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">About {organizer.name}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">{organizer.about}</p>
            </div>
            
            {/* Packages Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800">Packages</h2>
              <div className="mt-4 space-y-6">
                {organizer.packages.map(pkg => (
                  <div key={pkg.name} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
                            <p className="text-gray-500 mt-1">{pkg.features.join(' • ')}</p>
                        </div>
                        <p className="text-xl font-bold text-indigo-600 flex-shrink-0 mt-2 sm:mt-0 sm:ml-4">{pkg.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="border border-gray-200 rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Ready to plan?</h3>
                <p className="mt-2 text-gray-600">Starting from</p>
                <p className="text-3xl font-extrabold text-indigo-600 my-2">{organizer.priceRange.split(' - ')[0]}</p>
                <Link to={`/book/${organizer.id}`}>
                  <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                    Request a Quote
                  </button>
                </Link>
                <p className="mt-4 text-sm text-gray-500">You won't be charged yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
