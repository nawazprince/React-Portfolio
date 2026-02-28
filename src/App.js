import { useEffect } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import WorkExperience from './components/workexperience/WorkExperience';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <About />
      <WorkExperience />
      <Experience />
      <Services />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
