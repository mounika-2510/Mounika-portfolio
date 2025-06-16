import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;