import Body from "./components/Body"
import Carousel from "./components/carousel"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import Photobooth from "./pages/Photobooth";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Forfait from "./pages/Forfait";
import Evenements from "./pages/Evenements"
AOS.init();

function App() {


  return (
    <>
<Router>
<Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/photobooth" element={<Photobooth />} />
    <Route path="/forfaits" element={<Forfait />} />
    <Route path="/evenements" element={<Evenements/>} />
  </Routes>
  <Footer />
</Router>
    </>
  )
}

export default App
