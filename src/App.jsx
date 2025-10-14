import Body from "./components/Body"
import Carousel from "./components/carousel"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import Photobooth from "./pages/Photobooth";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
AOS.init();

function App() {


  return (
    <>
<Router>
  <Link to="/">Home</Link>
  <Link to="/photobooth">Photobooth</Link>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/photobooth" element={<Photobooth />} />
  </Routes>
  <Footer />
</Router>
    </>
  )
}

export default App
