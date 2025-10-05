import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StoryPage from './pages/StoryPage';
import GentlePath from './pages/GentlePath';
import AuroraMagic from './pages/AuroraMagic';
import About from './pages/About';
import Contact from './pages/Contact';
import FierceCommiePage from './pages/FierceCommiePage';
import ZoomFullThrottlePage from './pages/ZoomFullThrottlePage';
import Aurora2Page from './pages/Aurora2';
import Raye from './pages/Raye';
import EarthPage from './pages/EarthPage';
import AurorasPage from './pages/AurorasPage';
import AstroPage from './pages/AstroPage';
import SatPage from './pages/SatPage';
import MarsPage from './pages/MarsPage';
import AstraMars from './pages/AstraMars';
import MarsSurf from './pages/MarsSurf';
import Orbit from './pages/Orbit';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white relative">
        <AnimatedBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
          <Route path="/story/cammie-cme/gentle" element={<GentlePath />} />
          <Route path="/story/cammie-cme/gentle/aurora-magic" element={<AuroraMagic />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story/cammie-cme/fierce" element={<FierceCommiePage />} />
          <Route path="/story/cammie-cme/zoom-full-throttle" element={<ZoomFullThrottlePage />} />
          <Route path="/story/cammie-cme/aurora2" element={<Aurora2Page />} />
          <Route path="/story/raye-gcr" element={<Raye />} />
          <Route path="/earth" element={<EarthPage />} />
          <Route path="/auroras" element={<AurorasPage />} />
          <Route path="/astro" element={<AstroPage />} />
          <Route path="/sat" element={<SatPage />} />
          <Route path="/raye" element={<Raye />} />
          <Route path="/mars" element={<MarsPage />} />
          <Route path="/astramars" element={<AstraMars />} />
          <Route path="/marssurf" element={<MarsSurf />} />
          <Route path="/orbit" element={<Orbit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
