import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Services from './components/Services';
import About from './components/About';
import Credentials from './components/Credentials';
import MedicalTeam from './components/MedicalTeam';
import Transformations from './components/Transformations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
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
  );
}

export default App;
