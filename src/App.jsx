import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Stats from './sections/Stats';
import Exploring from './sections/Exploring';
import Process from './sections/Process';
import GitHubSection from './sections/GitHub';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#080b14] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Process />
        <Exploring />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
