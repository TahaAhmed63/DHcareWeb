import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assest/style.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

// Components
import Header from './Components/ElementComponents/Header';
import Footer from './Components/ElementComponents/Footer';
// import Cursor from './Components/ElementComponents/Cursor';
import { useEffect } from 'react';
import ClockInOutEvv from './pages/ClockInOutEvv';
import ElderAbuse from './pages/ElderAbuse';
import ElderlyVacine from './pages/ElderlyVacine';

function App() {
  useEffect(() => { 
    console.log("hell")
      // window.onload = ()=> window.scrollTo(0,0)
      window.history.scrollRestoration ="manual"
  }, []);
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/home-care-services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/clock-in-out-instructions" element={<ClockInOutEvv />} />
        <Route path="/elderly-abuse" element={<ElderAbuse />} />
        <Route path="/elderly-vacine" element={<ElderlyVacine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
