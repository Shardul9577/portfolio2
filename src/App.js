import logo from './logo.svg';
import './App.css';

import Landing from './components/Landing';
import About from './components/About';
import Facts from './components/Facts';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Landing/>
    <About/>
    <Facts/>
    <Skills/>
    <Education/>
    <Experience/>
    <Projects/> 
    <Resume/>
    <Services/>
    <Testimonials/>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
