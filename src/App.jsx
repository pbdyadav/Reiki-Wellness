import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop'; // <-- add this
import Home from '@/pages/Home.jsx';
import WhatIsReiki from '@/pages/WhatIsReiki.jsx';
import HowReikiWorks from '@/pages/HowReikiWorks.jsx';
import AboutHealer from '@/pages/AboutHealer.jsx';
import GuruParampara from '@/pages/GuruParampara.jsx';
import ReikiTools from '@/pages/ReikiTools.jsx';
import ChakrasExplained from '@/pages/ChakrasExplained.jsx';
import Meditation from '@/pages/Meditation.jsx';
import OnlineStore from '@/pages/OnlineStore.jsx';
import Contact from '@/pages/Contact.jsx';
import AuraCleansing from '@/pages/AuraCleansing.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <-- insert here */}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-is-reiki" element={<WhatIsReiki />} />
            <Route path="/how-reiki-works" element={<HowReikiWorks />} />
            <Route path="/about-healer" element={<AboutHealer />} />
            <Route path="/guru-parampara" element={<GuruParampara />} />
            <Route path="/reiki-tools" element={<ReikiTools />} />
            <Route path="/chakras" element={<ChakrasExplained />} />
            <Route path="/aura-cleansing" element={<AuraCleansing />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/store" element={<OnlineStore />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
