import React from 'react';
import Sidebar from './pages/Sidebar';
import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Sidebar />
      <div id="main-part">
        <div className="main-part-mobile">
          <i className="fa fa-bars" />
        </div>
        <Intro />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
