import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

/**
 * App — root layout with:
 * - Fixed top Navbar (desktop + mobile)
 * - Main content with top padding for navbar height
 * - Fixed BottomNav (mobile only)
 * - Footer
 * - Ambient background glows
 */
function App() {
  return (
    <Router>
      {/* Ambient global background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-secondary-container/20 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex flex-col w-full pt-16 flex-1 bg-surface">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Future routes: /solutions, /work, /about, /contact */}
          </Routes>
        </main>

        <Footer />
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
