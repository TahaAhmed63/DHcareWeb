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
import Cursor from './Components/ElementComponents/Cursor';
import { useLayoutEffect } from 'react';

function App() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="App">
         <Cursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
