import './App.css';
import { Route, Routes } from "react-router-dom";
import Contact from './components/ContactPage/Contact';
import Home from './components/HomePage/Home';

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </main>
  );
}

export default App;
