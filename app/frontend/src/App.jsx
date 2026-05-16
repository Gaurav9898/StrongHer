import React from 'react';
import './App.css';
import { EditProvider, useEdit } from './context/EditContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import MedicalTeam from './components/MedicalTeam';
import Transformations from './components/Transformations';
import Footer from './components/Footer';

const EditBanner = () => {
  const { editing } = useEdit();
  if (!editing) return null;
  return (
    <div className="sticky top-16 lg:top-[72px] z-40 bg-rose-500 text-white text-center py-2 text-xs font-semibold tracking-wide">
      Edit Mode Active — Click any text or image to modify. Changes save automatically.
    </div>
  );
};

function App() {
  return (
    <EditProvider>
      <div className="App">
        <Header />
        <EditBanner />
        <main>
          <Hero />
          <Pricing />
          <Services />
          <About />
          <Credentials />
          <MedicalTeam />
          <Transformations />
        </main>
        <Footer />
      </div>
    </EditProvider>
  );
}

export default App;
