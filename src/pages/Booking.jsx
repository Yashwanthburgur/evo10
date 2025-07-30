// src/pages/Booking.jsx
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { organizersData } from '../data/organizers';
import { ChevronLeft, CheckCircle } from 'lucide-react';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const organizer = organizersData.find(o => o.id === parseInt(id));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend or a service like EmailJS.
    console.log("Booking Request Submitted:", { organizerId: id, ...formData });
    setIsSubmitted(true);
  };

  if (!organizer) {
    return (
      <div className="container mx-auto text-center py-20">
        <h2 className="text-2xl font-bold">Organizer not found.</h2>
        <Link to="/explore" className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg">Back to Explore</Link>
      </div>
    );
  }

  if (isSubmitted) {
    return (
        <div className="bg-gray-50 min-h-[70vh] flex items-center justify-center">
            <div className="text-center bg-white p-10 rounded-xl shadow-lg">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                <h2 className="mt-4 text-3xl font-bold text-gray-800">Request Sent!</h2>
                <p className="mt-2 text-gray-600">Thank you! {organizer.name} will contact you shortly.</p>
                <button onClick={() => navigate('/explore')} className="mt-8 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-indigo-700">
                    Explore More Planners
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to={`/organizer/${id}`} className="flex items-center text-gray-600 hover:text-indigo-600 mb-8 font-semibold">
          <ChevronLeft size={20} /> Back to Profile
        </Link>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800">Request a Quote From</h1>
            <p className="text-xl font-semibold text-indigo-600 mt-1">{organizer.name}</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full form-input p-3 border-gray-300 rounded-md shadow-sm" />
                <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} className="w-full form-input p-3 border-gray-300 rounded-md shadow-sm" />
                <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full form-input p-3 border-gray-300 rounded-md shadow-sm" />
                <input type="number" name="guests" placeholder="Number of Guests" required onChange={handleChange} className="w-full form-input p-3 border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                <input type="date" name="eventDate" id="eventDate" required onChange={handleChange} className="w-full form-input p-3 border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <textarea name="message" rows="4" placeholder="Tell us more about your event (optional)" onChange={handleChange} className="w-full form-textarea p-3 border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
