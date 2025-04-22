import React, { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';
import './index.css';

function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('section-fade-in');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;