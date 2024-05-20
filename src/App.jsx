import React, { useState, useEffect } from 'react';
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className={`${styles.scrollToTopContainer} ${showButton ? styles.show : ''}`}>
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <img src="assets/roct.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
