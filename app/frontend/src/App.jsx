import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Services from './components/Services';
import About from './components/About';
import MedicalTeam from './components/MedicalTeam';
import Transformations from './components/Transformations';
import Footer from './components/Footer';
import EnquiryForm from './components/EnquiryForm';

const ENQUIRY_FROM_SITE_KEY = 'strongher-enquiry-opened-from-site';

function App() {
  const hashOpensEnquiry = window.location.hash === '#enquriy' || window.location.hash === '#enquiry';
  const enquiryOpenedFromSite = window.sessionStorage.getItem(ENQUIRY_FROM_SITE_KEY) === 'true';
  const [showEnquiry, setShowEnquiry] = useState(() => hashOpensEnquiry);
  const [lockEnquiryOpen, setLockEnquiryOpen] = useState(() => hashOpensEnquiry && !enquiryOpenedFromSite);
  const isEnquiryPage = window.location.pathname === '/enquiry';

  const openEnquiry = () => {
    window.sessionStorage.setItem(ENQUIRY_FROM_SITE_KEY, 'true');
    setLockEnquiryOpen(false);
    window.location.hash = 'enquiry';
    setShowEnquiry(true);
  };

  const closeEnquiry = () => {
    window.sessionStorage.removeItem(ENQUIRY_FROM_SITE_KEY);
    if (window.location.hash === '#enquriy' || window.location.hash === '#enquiry') {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    setShowEnquiry(false);
  };

  if (isEnquiryPage) {
    return <EnquiryForm standalone />;
  }

  return (
    <div className="App">
      <Header onEnquiryClick={openEnquiry} />
      <main>
        <Hero onEnquiryClick={openEnquiry} />
        <Pricing />
        <Services />
        <About />
        <MedicalTeam />
        <Transformations />
      </main>
      <Footer />
      {showEnquiry && <EnquiryForm onClose={closeEnquiry} resetOnBack dismissible={!lockEnquiryOpen} onSubmitted={closeEnquiry} />}
    </div>
  );
}

export default App;
