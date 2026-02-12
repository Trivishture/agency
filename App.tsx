import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import Contact from './pages/Contact';
import UnderConstruction from './pages/UnderConstruction';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* New Routes for Pages Under Construction */}
            <Route path="/about" element={<UnderConstruction />} />
            <Route path="/packages" element={<UnderConstruction />} />
            <Route path="/packages/:destination" element={<UnderConstruction />} />
            <Route path="/fixed-departures" element={<UnderConstruction />} />
            <Route path="/corporate" element={<UnderConstruction />} />
            <Route path="/blog" element={<UnderConstruction />} />
            <Route path="/privacy" element={<UnderConstruction />} />
            <Route path="/terms" element={<UnderConstruction />} />
            <Route path="/cancellation" element={<UnderConstruction />} />
            
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;