// import logo from './logo.svg';
import './global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, About, Contact, ReviewsPage } from './pages';
import Navbar from './components/Navbar';


function App() {

  // prevents animations during resizing
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper");
    }, 400);
  });


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
