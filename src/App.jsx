import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Feature from './pages/Feature.jsx';
import Integration from './pages/Integration.jsx';
import Testimonials from './pages/Testimonials.jsx';
import CaseStudies from './pages/CaseStudies.jsx';
import FAQ from './pages/FAQ.jsx';
import Security from './pages/Security.jsx';
import Compliance from './pages/Compliance.jsx';
import GetStarted from './pages/GetStarted.jsx';
import Legal from './pages/Legal.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/:slug" element={<Feature />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/integrations/:slug" element={<Integration />} />
        <Route path="/integrations" element={<Integration />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/security" element={<Security />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/terms" element={<Legal doc="terms" />} />
        <Route path="/privacy" element={<Legal doc="privacy" />} />
        <Route path="/payment-terms" element={<Legal doc="payment" />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
