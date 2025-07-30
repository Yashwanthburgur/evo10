// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Explore from './pages/Explore';
import OrganizerProfile from './pages/OrganizerProfile';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


// A layout component to wrap pages that need a Navbar and Footer
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  const location = useLocation();
  // We don't want the Navbar/Footer on the login page
  const showLayout = location.pathname !== '/login';

  return (
    <div className="font-sans">
      {showLayout ? (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/organizer/:id" element={<OrganizerProfile />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;