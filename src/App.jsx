import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#121316] text-[#F0F1F3]">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
