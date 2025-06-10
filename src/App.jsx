import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Uppgift2 from './pages/Uppgift2';
import Uppgift3 from './pages/Uppgift3';
import './App.css';
import './styles/page.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app__content">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uppgift2" element={<Uppgift2 />} />
            <Route path="/uppgift3" element={<Uppgift3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;