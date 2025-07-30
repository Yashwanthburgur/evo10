// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, PartyPopper, Cake, BellRing } from 'lucide-react';
import OrganizerCard from '../components/OrganizerCard';
import { organizersData } from '../data/organizers';

const Home = () => {
  // Show a few featured organizers on the home page
  const featuredOrganizers = organizersData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800">
        <div className="absolute inset-0">
           {/* <img src="https://placehold.co/1600x900/1f2937/ffffff?text=Grand+Event" className="w-full h-full object-cover opacity-30" alt="Event background"/> */}
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Plan Your Perfect Event in <span className="text-indigo-400">Bangalore</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Discover and book the city's top-rated event organizers for any occasion.
          </p>
          <div className="mt-8">
            <Link to="/explore">
              <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                Explore Planners
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Whatever the Occasion, We've Got You</h2>
            <p className="text-gray-500 mb-12">From intimate gatherings to grand celebrations.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center">
                    <div className="bg-pink-100 p-6 rounded-full">
                        <Cake className="h-12 w-12 text-pink-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Birthdays</h3>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-purple-100 p-6 rounded-full">
                        <BellRing className="h-12 w-12 text-purple-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Weddings</h3>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-green-100 p-6 rounded-full">
                        <PartyPopper className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">House Parties</h3>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="bg-blue-100 p-6 rounded-full">
                        <Search className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">And More...</h3>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Organizers Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Featured Event Organizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredOrganizers.map(organizer => (
              <OrganizerCard key={organizer.id} organizer={organizer} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/explore">
                <button className="text-indigo-600 font-semibold hover:underline">
                    View All Organizers &rarr;
                </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
