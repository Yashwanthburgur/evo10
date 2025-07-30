// src/pages/Dashboard.jsx
import React from 'react';
import { BarChart, Calendar, MessageSquare, User } from 'lucide-react';

// This is a placeholder for the vendor dashboard.
const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vendor Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <Calendar size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">New Bookings</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <MessageSquare size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">New Messages</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
           <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <BarChart size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Profile Views</p>
                <p className="text-2xl font-bold">1,204</p>
              </div>
            </div>
          </div>
           <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <User size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Account Status</p>
                <p className="text-xl font-bold text-green-600">Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Booking Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Customer</th>
                  <th className="py-2">Event Type</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy data */}
                <tr className="border-b">
                  <td className="py-4">Rohan Sharma</td>
                  <td className="py-4">Birthday Party</td>
                  <td className="py-4">2025-08-15</td>
                  <td className="py-4"><span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">Pending</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Priya Mehta</td>
                  <td className="py-4">Engagement</td>
                  <td className="py-4">2025-09-02</td>
                  <td className="py-4"><span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Confirmed</span></td>
                </tr>
                 <tr>
                  <td className="py-4">Anjali Desai</td>
                  <td className="py-4">House Party</td>
                  <td className="py-4">2025-08-22</td>
                  <td className="py-4"><span className="bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;