// import logo from './logo.svg';
import './global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, About, Reviews } from './pages';
import Navbar from './components/Navbar';


function App() {



  return (
    <BrowserRouter>
        <Navbar />


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
