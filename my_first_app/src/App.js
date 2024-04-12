import './App.css';
import { Route, Routes } from "react-router-dom";
import Contact from './components/ContactPage/Contact';
import Home from './components/HomePage/Home';
import Business from './components/BusinessPage/Business';
import Service from './components/ServicePage/Service';
import Blog from './components/BlogPage/Blog';

function App() {
  return (
    <main className='App bg-dark'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business" element={<Business />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </main>
  );
}

export default App;
