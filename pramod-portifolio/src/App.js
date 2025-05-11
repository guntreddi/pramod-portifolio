import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certifications from './components/certificates/Certifications';
import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
     <Navbar/>
    </div>
  );
}

export default App;
